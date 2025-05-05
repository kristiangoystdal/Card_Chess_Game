<template>
  <v-container class="d-flex justify-center">
    <v-card class="pa-4" outlined>
      <v-card-title class="justify-center">Chess Board</v-card-title>
      <v-card-text>
        <div class="chess-board" v-if="positions.length">
          <div v-for="(rowIndex, realRowIndex) in displayedRows" :key="realRowIndex" class="row">
            <div v-for="(col, colIndex) in cols" :key="colIndex"
              :class="['cell', (rowIndex + colIndex) % 2 === 0 ? 'light-cell' : 'dark-cell']"
              @click="selectPiece(rowIndex, colIndex)">
              <template
                v-if="positions[rowIndex] && positions[rowIndex][colIndex] && positions[rowIndex][colIndex].type !== 'blank'">
                <v-img :src="pieceImages[positions[rowIndex][colIndex].color][positions[rowIndex][colIndex].type]"
                  aspect-ratio="1" contain></v-img>
              </template>
              <template
                v-else-if="avabilableMoves.length && avabilableMoves.some(move => move.row === rowIndex && move.col === colIndex)">
                <v-icon color="black" large class="center">mdi-circle-outline</v-icon>
              </template>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>





<script>
import { db } from "@/js/firebaseConfig";
import { ref, update, get, child, onValue } from "firebase/database";

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
  white: {
    pawn: whitePawn,
    rook: whiteRook,
    knight: whiteKnight,
    bishop: whiteBishop,
    queen: whiteQueen,
    king: whiteKing,
  },
  black: {
    pawn: blackPawn,
    rook: blackRook,
    knight: blackKnight,
    bishop: blackBishop,
    queen: blackQueen,
    king: blackKing,
  },
};


export default {
  name: "ChessBoard",
  data() {
    return {
      rows: 8,
      cols: 8,
      positions: [],
      avabilableMoves: [],
      selectedPiece: null,
      turn: "black",
      turnNumber: 0,
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
    },

  },
  computed: {
    gameId() {
      return this.gameData ? this.gameData.id : null;
    },
    player1() {
      return this.gameData ? this.gameData.player1 : null;
    },
    player2() {
      return this.gameData ? this.gameData.player2 : null;
    },
    currentTurn() {
      return this.gameData ? this.gameData.currentTurn : null;
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
    displayedRows() {
      const indexes = [...Array(8).keys()]; // [0,1,2,3,4,5,6,7]
      return this.myColor === 'white' ? indexes.reverse() : indexes;
    },
    pieceImages() {
      return pieceImages;
    },
  },
  mounted() {
    this.initializeBoard();
    this.loadBoard();

    this.listenForGameUpdates();
  },
  methods: {
    async initializeBoard() {
      this.positions = Array.from({ length: 8 }, () => Array(8).fill({ color: "blank", type: "blank" }));
      this.setupPieces("white", 0, 1);
      this.setupBlankPieces("blank")
      this.setupPieces("black", 7, 6);
      await this.saveGame();

    },
    setupPieces(color, backRow, frontRow) {
      const pieces = [
        { type: "rook", col: 0 },
        { type: "knight", col: 1 },
        { type: "bishop", col: 2 },
        { type: "queen", col: 3 },
        { type: "king", col: 4 },
        { type: "bishop", col: 5 },
        { type: "knight", col: 6 },
        { type: "rook", col: 7 }
      ];
      pieces.forEach((piece) => {
        this.positions[backRow][piece.col] = { color, type: piece.type };
        this.positions[frontRow][piece.col] = { color, type: "pawn" };
      });
    },
    setupBlankPieces(color) {
      for (let i = 2; i < 6; i++) {
        for (let j = 0; j < 8; j++) {
          this.positions[i][j] = { color, type: "blank" };
        }
      }
    },
    async saveGame() {
      const turnNumber = this.turnNumber + 1;
      const nextPlayer = this.currentTurn === "player1" ? "player2" : "player1";
      const gameRef = ref(db, `games/${this.gameId}`);
      // Save the game state to Firebase
      await update(gameRef, {
        currentTurn: nextPlayer,
        turnNumber: this.turnNumber,
        board: this.positions,
      });
      console.log("Game saved successfully.");
    },
    async loadBoard() {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `games/${this.gameId}`));

      if (snapshot.exists()) {
        this.positions = snapshot.val().board;
        this.turnNumber = snapshot.val().turnNumber;
      } else {
        console.log("No saved game! Initializing...");
        this.initializeBoard();
      }
    },
    movePiece(fromRow, fromCol, toRow, toCol) {
      const piece = this.positions[fromRow][fromCol];
      if (piece && piece.type !== "blank" || this.positions[toRow][toCol].color !== piece.color) {
        this.positions[toRow][toCol] = piece;
        this.positions[fromRow][fromCol] = { color: "blank", type: "blank" };
        this.saveGame();
      }
    },
    getPiece(row, col) {
      return this.positions[row][col];
    },
    getPieceType(row, col) {
      return this.positions[row][col].type;
    },
    getCurrentPlayer() {
      return this.currentTurn === "player1" ? this.player1 : this.player2;
    },
    selectPiece(row, col) {
      // Check if it's your turn
      if ((this.currentTurn == "player1" && this.player1.userId !== localStorage.getItem("userId")) || (this.currentTurn == "player2" && this.player2.userId !== localStorage.getItem("userId"))) {
        console.log("Not your turn!");
        return; // Block the move
      }

      const piece = this.getPiece(row, col);

      if (piece && piece.type !== "blank" && piece.color === this.getCurrentPlayer().color) {
        this.selectedPiece = piece;
        this.selectedRow = row;
        this.selectedCol = col;
        this.showAvailableMoves(row, col);
        console.log("Selected piece:", piece.type);
      } else {
        if (this.avabilableMoves.length && this.avabilableMoves.some(move => move.row === row && move.col === col)) {
          // Move the selected piece to the clicked cell
          this.movePiece(this.selectedRow, this.selectedCol, row, col);
        } else {
          console.log("Invalid move or no piece selected.");
        }

        this.selectedPiece = null;
        this.avabilableMoves = [];
      }
    },
    showAvailableMoves(row, col) {
      const piece = this.getPiece(row, col);
      if (piece && piece.type !== "blank") {
        this.avabilableMoves = this.calculateAvailableMoves(piece, row, col);
      } else {
        this.avabilableMoves = [];
      }
    },
    calculateAvailableMoves(piece, row, col) {
      const moves = [];

      if (piece.type === "king") {
        if (row > 0 && (this.getPiece(row - 1, col).type === "blank" || this.getPiece(row - 1, col).color !== piece.color)) {
          moves.push({ row: row - 1, col: col });
        }
        if (row < 7 && (this.getPiece(row + 1, col).type === "blank" || this.getPiece(row + 1, col).color !== piece.color)) {
          moves.push({ row: row + 1, col: col });
        }
        if (col > 0 && (this.getPiece(row, col - 1).type === "blank" || this.getPiece(row, col - 1).color !== piece.color)) {
          moves.push({ row: row, col: col - 1 });
        }
        if (col < 7 && (this.getPiece(row, col + 1).type === "blank" || this.getPiece(row, col + 1).color !== piece.color)) {
          moves.push({ row: row, col: col + 1 });
        }
        if (row > 0 && col > 0 && (this.getPiece(row - 1, col - 1).type === "blank" || this.getPiece(row - 1, col - 1).color !== piece.color)) {
          moves.push({ row: row - 1, col: col - 1 });
        }
        if (row > 0 && col < 7 && (this.getPiece(row - 1, col + 1).type === "blank" || this.getPiece(row - 1, col + 1).color !== piece.color)) {
          moves.push({ row: row - 1, col: col + 1 });
        }
        if (row < 7 && col > 0 && (this.getPiece(row + 1, col - 1).type === "blank" || this.getPiece(row + 1, col - 1).color !== piece.color)) {
          moves.push({ row: row + 1, col: col - 1 });
        }
        if (row < 7 && col < 7 && (this.getPiece(row + 1, col + 1).type === "blank" || this.getPiece(row + 1, col + 1).color !== piece.color)) {
          moves.push({ row: row + 1, col: col + 1 });
        }
      }

      if (piece.type === "rook") {
        for (let i = row - 1; i >= 0; i--) {
          if (this.getPiece(i, col).type === "blank") {
            moves.push({ row: i, col });
          } else if (this.getPiece(i, col).color !== piece.color) {
            moves.push({ row: i, col });
            break;
          } else {
            break;
          }
        }
        for (let i = row + 1; i <= 7; i++) {
          if (this.getPiece(i, col).type === "blank") {
            moves.push({ row: i, col });
          } else if (this.getPiece(i, col).color !== piece.color) {
            moves.push({ row: i, col });
            break;
          } else {
            break;
          }
        }
        for (let i = col - 1; i >= 0; i--) {
          if (this.getPiece(row, i).type === "blank") {
            moves.push({ row, col: i });
          } else if (this.getPiece(row, i).color !== piece.color) {
            moves.push({ row, col: i });
            break;
          } else {
            break;
          }
        }
        for (let i = col + 1; i <= 7; i++) {
          if (this.getPiece(row, i).type === "blank") {
            moves.push({ row, col: i });
          } else if (this.getPiece(row, i).color !== piece.color) {
            moves.push({ row, col: i });
            break;
          } else {
            break;
          }
        }
      }

      if (piece.type === "bishop") {
        for (let i = 1; i <= 7; i++) {
          if (row - i >= 0 && col - i >= 0) {
            if (this.getPiece(row - i, col - i).type === "blank") {
              moves.push({ row: row - i, col: col - i });
            } else if (this.getPiece(row - i, col - i).color !== piece.color) {
              moves.push({ row: row - i, col: col - i });
              break;
            } else {
              break;
            }
          }
        }
        for (let i = 1; i <= 7; i++) {
          if (row - i >= 0 && col + i <= 7) {
            if (this.getPiece(row - i, col + i).type === "blank") {
              moves.push({ row: row - i, col: col + i });
            } else if (this.getPiece(row - i, col + i).color !== piece.color) {
              moves.push({ row: row - i, col: col + i });
              break;
            } else {
              break;
            }
          }
        }
        for (let i = 1; i <= 7; i++) {
          if (row + i <= 7 && col - i >= 0) {
            if (this.getPiece(row + i, col - i).type === "blank") {
              moves.push({ row: row + i, col: col - i });
            } else if (this.getPiece(row + i, col - i).color !== piece.color) {
              moves.push({ row: row + i, col: col - i });
              break;
            } else {
              break;
            }
          }
        }
        for (let i = 1; i <= 7; i++) {
          if (row + i <= 7 && col + i <= 7) {
            if (this.getPiece(row + i, col + i).type === "blank") {
              moves.push({ row: row + i, col: col + i });
            } else if (this.getPiece(row + i, col + i).color !== piece.color) {
              moves.push({ row: row + i, col: col + i });
              break;
            } else
              break;
          }
        }
      }

      if (piece.type === "queen") {
        // Combine rook and bishop moves
        moves.push(...this.calculateAvailableMoves({ type: "rook", color: piece.color }, row, col));
        moves.push(...this.calculateAvailableMoves({ type: "bishop", color: piece.color }, row, col));
      }

      if (piece.type === "knight") {
        const knightMoves = [
          { row: -2, col: -1 },
          { row: -2, col: 1 },
          { row: -1, col: -2 },
          { row: -1, col: 2 },
          { row: 1, col: -2 },
          { row: 1, col: 2 },
          { row: 2, col: -1 },
          { row: 2, col: 1 },
        ];
        knightMoves.forEach((move) => {
          const newRow = row + move.row;
          const newCol = col + move.col;
          if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
            if (this.getPiece(newRow, newCol).type === "blank" || this.getPiece(newRow, newCol).color !== piece.color) {
              moves.push({ row: newRow, col: newCol });
            }
          }
        });
      }

      if (piece.type === "pawn") {
        const direction = piece.color === "white" ? -1 : 1;
        const startRow = piece.color === "white" ? 6 : 1;
        if (this.getPiece(row + direction, col).type === "blank") {
          moves.push({ row: row + direction, col });
          if (row === startRow && this.getPiece(row + 2 * direction, col).type === "blank") {
            moves.push({ row: row + 2 * direction, col });
          }
        }
        if (col > 0 && this.getPiece(row + direction, col - 1).color !== piece.color) {
          moves.push({ row: row + direction, col: col - 1 });
        }
        if (col < 7 && this.getPiece(row + direction, col + 1).color !== piece.color) {
          moves.push({ row: row + direction, col: col + 1 });
        }
      }

      return moves;
    },
    listenForGameUpdates() {
      const gameRef = ref(db, `games/${this.gameId}`);
      onValue(gameRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.positions = data.board;
          this.turn = data.turn;
          this.turnNumber = data.turnNumber;
        }
      });
    }
  },
};

</script>

<style scoped>
.chess-board {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  width: 400px;
  /* Fixed board size */
  height: 400px;
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
</style>