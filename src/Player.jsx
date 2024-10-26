import { FaFlag, FaUser } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function Player({player, handleChoosePlayer}){
    const {img, name, country, position, price, batting_style} = player

    return (
        <div className="col-span-1 border rounded-lg px-3 py-5 m-5 flex flex-col gap-5">
            <img className="w-full h-1/2 p-5" src={img} alt="player image"/>
            <div className="flex gap-3 items-center">
                <FaUser style={{fontSize: '24px'}}/>
                <h3 className="text-2xl font-bold">{name}</h3>
            </div>
            <div className="flex justify-between">
                <div className='flex gap-2 items-center'>
                    <FaFlag style={{ color: 'grey'}}/>
                    <p className="text-slate-600">{country}</p>
                </div>
                <p className="bg-slate-100 rounded-lg p-2">{position}</p>
            </div>
            <hr/>
            <div className="grid grid-cols-2 gap-3">
                <h4 className="col-span-2 font-semibold">Rating</h4>
                <p className="col-span-1 font-semibold">Batting Style</p>
                <p className="col-span-1 text-right text-slate-600">{batting_style}</p>
                <p className="col-span-1 font-semibold">Price: {price}</p>
                <button onClick={() => handleChoosePlayer(player)} className="col-span-1 border rounded-lg p-2 text-center font-semibold bg-lime-200">Choose Player</button>
            </div>
        </div>
    )
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired
};