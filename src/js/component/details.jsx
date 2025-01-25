import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Details = () => {


    const {uid} = useParams();
    const [character, setCharacter] = useState([])

    useEffect(() => {


            async function loadInfo(characterID){

                    try{
                        const resp = await fetch(`https://www.swapi.tech/api/people/${characterID}`)
                        const data = await resp.json()
                        setCharacter(data.result.properties)
                    }catch(err){
                        console.log(err)
                    }

                }
                loadInfo(uid);
          }, [])


    return(
        <>
            <div className="row" align="center">
                <div className=" col-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} />
                </div>
                <div className="col-8  justify-content-center">
                    <h1>{character.name}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat, hic beatae at in recusandae veritatis magni deleniti, molestias cupiditate velit dolores ipsa voluptas dolorem nam reprehenderit dolorum rem quam. Veniam, doloremque?</p>
                </div>

            </div>
        </>
    )
}