import ToDoList from "./ToDolist";
import Head from "next/head";

function Home(){
    return (
        <>
        <Head>
           <link rel="stylesheet" href="/pages/ToDoList.css" />
        </Head>
        <ToDoList />
        </>
    )
}

export default Home