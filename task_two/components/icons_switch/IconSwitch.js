import React from 'react'
import ReactDOM from 'react-dom';

function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return (
      <div className="switch-icon">
        <span className="btn switch-icon-btn" onClick={onSwitch}>
          <i className={`material-icons ${icon}`}>{icon}</i>
        </span>
      </div>
  )
}

export default IconSwitch;
