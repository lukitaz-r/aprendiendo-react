/* eslint-disable react/prop-types */

import Square from "./Square";

const Winner = ({winner, resetGame}) => {
    if (winner === null) return null
    const winnerText = winner === false ? 'Draw' : 'Winner:'
    return (
        <div className='winner'>
            <div className='winner__card'>
                <div className='winner__content'>
                    <h2>{winnerText}</h2>
                </div>
                <div className='winner__id'>{winner ? <Square>{winner}</Square> : "1/2 - 1/2"}</div>
                <div className='winner__footer'>
                    <button
                        onClick={resetGame}
                    >
                    New Game
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Winner;