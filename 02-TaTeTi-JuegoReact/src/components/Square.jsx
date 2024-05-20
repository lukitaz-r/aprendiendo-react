/* eslint-disable react/prop-types */

const Square = ({index, isSelected, children, updateBoard}) => {
    const squareIsSelected = isSelected ? 'is__selected' : ''

    const handleClick = () => {
        updateBoard(index)
    }

    switch (children) {
        case 'X':
            return (
                <div 
                    className={`square is__x ${squareIsSelected}`}

                >
                    {children}
                </div>
            )
        case 'O':
            return (
                <div className={`square is__o ${squareIsSelected}`}>
                    {children}
                </div>
            )
        default: 
            return (
                <div 
                    className="square"
                    onClick={handleClick}
                >
                    {children}
                </div>
            )
    }
};
export default Square;