import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {id} = useParams();
    const userId = Number(id);
    return (
    <>
    
    <h1>User</h1>
     <h2>{userId<10?"djking":"noob"}</h2>
    </>
);
}