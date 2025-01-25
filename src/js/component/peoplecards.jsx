import React, { useContext } from "react"
import { Card } from "./card.jsx"
import { Context } from "../store/appContext"

export const Peoplecards = () => {
    const {store, actions} = useContext(Context)
    return(
    
    <div>
        {store.personas && store.personas.map((item, index)=>{
            return <Card key={index} item={item} type={"planets"}/>
        })}
    </div>

    )
}