import PropTypes from 'prop-types'
import Star from './Star'
import {useState, fragment} from 'react'
const shortid = require('shortid');

function Stars({count}) {
  if (Number.isInteger(count) && count>=1 && count<=5) {
    const starsArr = [...Array(count)].map(e => {return {id: shortid.generate()}})
     return(
       <ul className="card-body-stars u-clearfix">
        {
          starsArr.map(e => <Star key={e.id} />)
        }
       </ul>
     )
  }
  return null
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}

export default Stars;
