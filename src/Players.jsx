import { useEffect } from "react"
import { useState } from "react"
import Player from "./Player"
import PropTypes from 'prop-types'

export default function Players({handleChoosePlayer}){
    const [players, setPlayers] = useState([])

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/nafisahnubah/json/refs/heads/main/players.json')
        .then(res => res.json())
        .then(players => setPlayers(players))
    }, [])

    return(
        <div className="md:grid grid-cols-3 md:mx-32 mx-10">
            {
                players.map(player => <Player key={player.name} player={player} handleChoosePlayer={handleChoosePlayer}></Player>)
            }
        </div>
    )
}

Players.propTypes = {
    handleChoosePlayer: PropTypes.func.isRequired,
};