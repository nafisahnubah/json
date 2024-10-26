import Selected from './Selected'
import PropTypes from 'prop-types'

export default function Selecteds({selecteds, handleRemove}){
    return(
        <div>
            {
                selecteds.map(selected => <Selected key={selected.name} selected={selected} handleRemove={handleRemove}></Selected>)
            }
        </div>
    )
}

Selecteds.propTypes = {
    selecteds: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
};