import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function Selected({selected, handleRemove}){
    const {img, name, batting_style} = selected

    return (
        <div className="p-3 m-3 border rounded-lg md:mx-32 mx-10 flex justify-between">
            <div className='flex justify-left gap-5'>
                <div>
                    <img className='w-10 rounded-lg' src={img} alt="Player image" />
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p className='text-slate-600'>{batting_style}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemove(selected)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

Selected.propTypes = {
    selected: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
};