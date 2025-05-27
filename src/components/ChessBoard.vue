<template>
  <div class="chess-board">
    <div v-for="rowIndex in 8" :key="rowIndex" class="row">
      <div v-for="colIndex in 8" :key="colIndex"
        :class="['cell', ((getBoardRow(rowIndex) + getBoardCol(colIndex)) % 2 === 0) ? 'light-cell' : 'dark-cell']"
        @click="selectPiece(getBoardRow(rowIndex), getBoardCol(colIndex))">

        <!-- Green outline under piece if it's a valid capture -->
        <div v-if="
          availableMoveSquares.includes(getSquare(getBoardRow(rowIndex), getBoardCol(colIndex))) &&
          getPieceAt(getBoardRow(rowIndex), getBoardCol(colIndex)) !== null
        " class="center piece-overlay full-square">
          <v-icon color="#333333" class="full-icon" x-large>mdi-circle-outline</v-icon>
        </div>

        <!-- Piece image (always on top) -->
        <template v-if="getPieceAt(getBoardRow(rowIndex), getBoardCol(colIndex))">
          <v-img :src="pieceImages[getPieceAt(getBoardRow(rowIndex), getBoardCol(colIndex))]" alt="chess piece"
            class="piece-img" />
        </template>


        <!-- Black dot for empty valid destination -->
        <div v-if="
          availableMoveSquares.includes(getSquare(getBoardRow(rowIndex), getBoardCol(colIndex))) &&
          getPieceAt(getBoardRow(rowIndex), getBoardCol(colIndex)) === null
        " class="center">
          <v-icon color="#333333" large>mdi-circle</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { db } from "@/js/firebaseConfig";
import { ref, update } from "firebase/database";
import { moves, move } from "js-chess-engine";

import whitePawn from "@/assets/images/chess_pieces/pawn-w.svg";
import whiteRook from "@/assets/images/chess_pieces/rook-w.svg";
import whiteKnight from "@/assets/images/chess_pieces/knight-w.svg";
import whiteBishop from "@/assets/images/chess_pieces/bishop-w.svg";
import whiteQueen from "@/assets/images/chess_pieces/queen-w.svg";
import whiteKing from "@/assets/images/chess_pieces/king-w.svg";

import blackPawn from "@/assets/images/chess_pieces/pawn-b.svg";
import blackRook from "@/assets/images/chess_pieces/rook-b.svg";
import blackKnight from "@/assets/images/chess_pieces/knight-b.svg";
import blackBishop from "@/assets/images/chess_pieces/bishop-b.svg";
import blackQueen from "@/assets/images/chess_pieces/queen-b.svg";
import blackKing from "@/assets/images/chess_pieces/king-b.svg";

const pieceImages = {
  p: blackPawn,
  r: blackRook,
  n: blackKnight,
  b: blackBishop,
  q: blackQueen,
  k: blackKing,
  P: whitePawn,
  R: whiteRook,
  N: whiteKnight,
  B: whiteBishop,
  Q: whiteQueen,
  K: whiteKing
};


export default {
  name: "ChessBoard",
  data() {
    return {
      rows: 8,
      cols: 8,
      availableMoves: null,
      selectedPiece: null,
      selectedRow: null,
      selectedCol: null,
    };
  },
  props: {
    gameData: {
      type: Object,
      required: true,
    },
    gameId: {
      type: String,
      required: true,
    }
  },
  computed: {
    player1() {
      return this.gameData ? this.gameData.player1 : null;
    },
    player2() {
      return this.gameData ? this.gameData.player2 : null;
    },
    currentTurn() {
      return this.gameData ? this.gameData.game.board.configuration.turn : null;
    },
    myColor() {
      const userId = localStorage.getItem('userId');
      if (this.player1 && userId === this.player1.userId) {
        return this.player1.color;
      } else if (this.player2 && userId === this.player2.userId) {
        return this.player2.color;
      }
      return null;
    },
    myPlayer() {
      const userId = localStorage.getItem('userId');
      if (this.player1 && userId === this.player1.userId) {
        return this.player1;
      } else if (this.player2 && userId === this.player2.userId) {
        return this.player2;
      }
      return null;
    },
    myCardHand() {
      return this.myPlayer ? this.myPlayer.hand : null;
    },
    pieceImages() {
      return pieceImages;
    },
    pieces() {
      return this.gameData ? this.gameData.game.board.configuration.pieces : [];
    },
    gamemode() {
      return this.gameData ? this.gameData.mode : null;
    },
    chessGame() {
      return this.gameData ? this.gameData.game : null;
    },
    boardConfiguration() {
      return this.gameData ? this.gameData.game.board.configuration : null;
    },
    availableMoveSquares() {
      if (!this.availableMoves || typeof this.availableMoves !== 'object') return [];
      return Object.values(this.availableMoves);
    }
  },
  methods: {
    async saveGame() {
      // Check which player is making the move and update their hand
      const player1 = this.player1;
      const player2 = this.player2;
      const player = this.currentTurn === "white" ? player1 : player2;
      const playerHand = [...player.hand];

      // Remove the selected piece from the player's hand
      let cardIndex = playerHand.indexOf(this.selectedPiece.toLowerCase());
      if (cardIndex !== -1) {
        playerHand.splice(cardIndex, 1);
      } else {
        // If the card is not found in the player's hand, it might be a wild card
        cardIndex = playerHand.indexOf("w");
        if (cardIndex !== -1) {
          playerHand.splice(cardIndex, 1);
        }
      }

      if (player.userId === player1.userId) {
        player1.hand = playerHand;
      } else {
        player2.hand = playerHand;
      }

      const nextTurn = this.currentTurn === "white" ? "black" : "white";
      this.chessGame.board.configuration.turn = nextTurn;

      this.$emit("gameUpdated", {
        player1: player1,
        player2: player2,
        game: this.chessGame,
        cardIndex: cardIndex,
      });

    },
    selectPiece(row, col) {
      const localGame = this.gameData.game;

      // Check if it's your turn
      if (this.currentTurn !== this.myColor) {
        console.warn("It's not your turn!");
        return; // Block the move
      }

      const piece = this.getPieceAt(row, col);

      if (piece) {
        const isEnemyPiece = (
          (this.myColor === "white" && !this.checkLowerCase(piece)) ||
          (this.myColor === "black" && this.checkLowerCase(piece))
        );

        if (!isEnemyPiece) {
          // Not an enemy piece, check if it's in your hand
          const pieceType = piece.toLowerCase();
          if (!this.myCardHand.includes(pieceType) && !this.myCardHand.includes("w")) {
            console.warn("Piece not in your hand:", piece);
            return;
          }
        }
      }

      // Move the selected piece to the clicked cell
      if (this.selectedPiece && this.availableMoves.length > 0) {
        const fromSquare = this.getSquare(this.selectedRow, this.selectedCol);
        const toSquare = this.getSquare(row, col);

        if (this.availableMoves.includes(toSquare)) {
          // Move the piece
          move(this.chessGame.board.configuration, fromSquare, toSquare);
          this.chessGame.board.configuration = JSON.parse(JSON.stringify(this.chessGame.board.configuration));

          // Update the game
          this.saveGame(localGame);

          this.selectedPiece = null;
          this.selectedRow = null;
          this.selectedCol = null;
          this.availableMoves = {};
          return;
        }

        // Reset selected piece
        this.selectedPiece = null;
        this.selectedRow = null;
        this.selectedCol = null;
        this.availableMoves = {};
      }

      if (!piece) {
        return;
      }

      // Check if the selected piece is one of your pieces
      if ((this.myColor === "white" && this.checkLowerCase(piece)) || (this.myColor === "black" && !this.checkLowerCase(piece))) {
        this.selectedPiece = piece;
        this.selectedRow = row;
        this.selectedCol = col;

        // Get the available moves for current player
        this.availableMoves = this.chessGame.moves(this.getSquare(row, col));
      }
      else {
        this.selectedPiece = null;
        this.selectedRow = null;
        this.selectedCol = null;
        this.availableMoves = [];
      }
    },
    getPieceAt(row, col) {
      const square = this.getSquare(row, col);
      const piece = this.pieces[square];
      return piece || null;
    },
    getBoardRow(viewRowIndex) {
      return this.myColor === 'white' ? 8 - viewRowIndex : viewRowIndex - 1;
    },
    getBoardCol(viewColIndex) {
      return this.myColor === 'white' ? viewColIndex - 1 : 8 - viewColIndex;
    },
    checkLowerCase(piece) {
      if (typeof piece !== 'string') {
        return false;
      }
      return piece === piece.toLowerCase() ? false : true;
    },
    getSquare(row, col) {
      const file = String.fromCharCode(65 + col); // A-H
      const rank = (row + 1).toString(); // 1-8
      return file + rank;
    },
  }
};

</script>

<style scoped>
.chess-board {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  aspect-ratio: 1 / 1;
  height: 100%;
  margin: auto;
  border: 2px solid black;
  box-sizing: border-box;
}


.row {
  display: contents;
}

.cell {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}

/* Light and dark squares */
.light-cell {
  background-color: #eeeed2;
}

.dark-cell {
  background-color: #769656;
}

/* Piece image inside a cell */
.cell img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  /* Maintain aspect ratio */
  position: absolute;
  top: 10%;
  left: 10%;
  pointer-events: none;
  /* Makes it easier to handle cell clicks later */
}

/* Optional: nice hover effect on cells */
/* .cell:hover {
  outline: 2px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
} */

/* (Optional) If you want a "selected" cell later */
.cell.selected {
  outline: 2px solid #ff0000;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.piece-img {
  position: relative;
  z-index: 2;
}

.piece-overlay {
  position: absolute;
  z-index: 1;
}

.piece-overlay.full-square {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.full-icon {
  font-size: 450%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>