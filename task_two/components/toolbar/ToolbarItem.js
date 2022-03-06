import React from 'react';
import PropTypes from 'prop-types';

function ToolbarItem(props) {
  const {name, active}=props;

  const eventClick = () => {
    props.onClick(props)
  }

  return(
    <li className={`toolbar-item${active===name ? ' active' : ''}`} onClick={eventClick}>
      {name}
    </li>
  )
}

ToolbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ToolbarItem;
