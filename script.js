let board=["", "", "", "", "", "", "", "", ""];
let currentPlayer="X";
let gameOver=false;

function makeMove(index){
    if(!gameOver && board[index]==="")
    {
        board[index]=currentPlayer;
        document.getElementsByClassName("cell")[index].innerHTML=currentPlayer;
        checkWinner();
        currentPlayer=currentPlayer==="X"?"O":"X";
    }
}

function checkWinner()
{
    const winningCombinations=[
        [0,1,2],[3,4,5],[6,7,8],   //rows
        [0,3,6],[1,4,7],[2,5,8],   //columns
        [0,4,8],[2,4,6]            //diagonals
    ];
    for(var i=0;i<winningCombinations.length;i++)
    {
        const[a,b,c]=winningCombinations[i];
        if(board[a]!=="" && board[a]===board[b] && board[a]===board[c])
        {
            gameOver=true;
            alert("Player "+currentPlayer+" wins");
            return;
        }
    }
    if(!board.includes(""))  //if board does not have left any empty box and neither player won, its a tie
    {
        gameOver=true;
        alert("it's a tie!");
    }
}

function reset()
{
    board=["", "", "", "", "", "", "", "", ""];
    currentPlayer="X";
    gameOver=false;
    const cells=document.getElementsByClassName("cell");
    for(var i =0;i<cells.length;i++)
    {
        cells[i].innerHTML="";
    }
}