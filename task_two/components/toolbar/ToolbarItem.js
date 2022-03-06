import React from 'react';
import PropTypes from 'prop-types';

function ToolbarItem(props) {
  const {name, active}=props.items;

  const eventClick = (e) => {
    props.onClick(props.items)
  }

  return(
    <li className={`toolbar-item${active===name ? ' active' : ''}`} onClick={eventClick}>
      {name}
    </li>
  )
}

export default ToolbarItem;
