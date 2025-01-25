import PropTypes from "prop-types";
import React, {useState, useEffect, useContext, useActionState}from "react";
import { Context } from "../store/appContext"
import {Link} from "react-router-dom"

export const Card = (props) => {
   const {store, actions} = useContext(Context)
   const [character, setCharacter] = useState([]);
   const [type,setType] = useState([])
   console.log(props.type)

    useEffect(() => {
        async function loadCharacter(){
                try{
                    const resp = await fetch(`${props.item.url}`)
                    const data = await resp.json()
                    setCharacter(data.result.properties)
                }catch(err){
                    console.log(err)
                }
            }
            loadCharacter();
    }, [])
    


    return(
        <>
            <div classname="card" style={{"width": "18rem"}}>
                <img src={`https://starwars-visualguide.com/assets/img/${type}/${props.item.uid}.jpg`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.item.name}</h5>
                    <ul>
                        <li>{character.gender}</li>
                        <li>{character.height}</li>
                        <li>{character.eye_color}</li>
                    </ul>
                    <div className="buttons">
                    <Link to={"/details/" + props.item.uid}>
                        <button type="button" class="btn btn-primary">detalles</button>
                    </Link>

                    <button type="button" class="btn btn-warning" onClick={()=> actions.addToCart(props.item)}>like</button>
                    </div>
                </div>
            </div>
        </>
    )
}

