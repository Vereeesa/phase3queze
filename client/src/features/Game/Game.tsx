import React from "react"

function Game(): JSX.Element {

    const   



    return(
        <>
        <div>
            {game.question}
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={gameAnswer}>Place your answer here</input>
            <button type="submit">Answer</button>
        </form>
        {
            `ответ от сервера? верно/неверно и очки?`
        } 
        </>
    )
};

