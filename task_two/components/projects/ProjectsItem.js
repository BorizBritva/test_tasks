import React from 'react';
import PropTypes from 'prop-types';

function ProjectsItem(props) {
  const imgSrc = props.items

  return(
    <li className="projects-item">
      <img src={imgSrc} />
    </li>
  )
}

export default ProjectsItem;
