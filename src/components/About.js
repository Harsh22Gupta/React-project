import React from 'react'
import PropTypes from 'prop-types'
function About(props) {
  return (
    <div style={{color : props.mode==='light'?'black':'white'}}>
      HELLO THIS IS HARSH FROM JADAVPUR UNIVERSITY PRESENTING YOU HIS FIRST REACT WEBPAGE.
    </div>
  )
}

export default About
