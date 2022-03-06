import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Toolbar from './toolbar/Toolbar';
import ProjectsList from './projects/ProjectsList';

function Portfolio(props) {
  const {filters, selected, projects} = props.items;
  const [select, setSelected] = useState(selected)

  const handleSelected = (e) => {
    setSelected(prevSelect => {
      return e.name;
    })
  }

  const resProjects = projects.filter(item => {
    return select==="All" ? item : item.category===select;
  })

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={select} onSelectFilter={handleSelected}/>
      <ProjectsList items={resProjects}/>
    </div>
  )
}

export default Portfolio;
