import React from 'react'
import PropTypes from 'prop-types'

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className="error">
      <p className="input-error">{props.message}</p>
      </div>
    )
  }
  return <></>

}

ValidationError.propTypes = {
    
  message: PropTypes.string.isRequired,
  
};