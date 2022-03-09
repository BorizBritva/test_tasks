import PropTypes from 'prop-types';

function Icon({icon}) {

  return (
      <i className={`material-icons ${icon}`}>{icon}</i>
  )
}

export default Icon;
