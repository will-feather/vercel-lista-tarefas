import ToDoList from "./ToDolist"

function Home(){
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="stylesheet" href="ToDoList.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Lista de Tarefas</title>
            </head>
            <body>
                <ToDoList />
            </body>
        </html>
    )
}

export default Home