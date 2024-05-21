import { useState } from 'react'; 
import './grid.css'
import confetti from 'canvas-confetti'

import Square from './components/Square';
import Winner from './components/Winner.jsx';


import {TURNS} from './utils/constants.js'
import { checkWinner, checkEndGame } from './utils/functions.js';

const Grid = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)
    const updateBoard = (index) => {
        if (winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn =  turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            setWinner(newWinner)
            confetti()
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }
    return (
        <>
            <header className='game__header'>
                <h1>
                    Tic-Tac-Toe
                </h1>
                <button
                    onClick={resetGame}
                >
                    Reset Game
                </button>
            </header>
            <div className="game__board">
                {
                    board.map((_, i) => {
                        return (
                            <Square 
                                key={i}
                                index={i}
                                updateBoard={updateBoard}
                            >
                                {board[i]}
                            </Square>
                        )
                    }) 
                }
            </div>
            <div className='turn'>
                <Square
                    isSelected={turn === TURNS.X}
                >
                    {TURNS.X}
                </Square>
                <Square
                    isSelected={turn === TURNS.O}
                >
                    {TURNS.O}
                </Square>
            </div> 
            <Winner 
                winner={winner}
                resetGame={resetGame}
            />
        </>
    );
};

export default Grid;