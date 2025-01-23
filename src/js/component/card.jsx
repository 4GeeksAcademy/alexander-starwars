import PropTypes from "prop-types";
import React, {useState, useEffect, useContext, useActionState}from "react";
import { Context } from "../store/appContext"

export const Card = ({titulo, url, caracteristica1, caracteristica2, caracteristica3}) => {
   const {store, actions} = useContext(Context)
   
    const info = store.info
    console.log(info)

    useEffect(()=>{
        actions.getInfo(url)
    },[])


    return(
        <>
            <div classname="card" style={{"width": "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <ul>
                        {/* <li>{info.gender}</li>
                        <li>{info.height}</li>
                        <li>{info.eye_color}</li> */}
                    </ul>
                    <div className="buttons">
                    <button type="button" class="btn btn-primary">detalles</button>

                    <button type="button" class="btn btn-warning">like</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    titulo: PropTypes.string,
    caracteristica1: PropTypes.string,
    caracteristica2: PropTypes.string,
    caracteristica3: PropTypes.string,
}