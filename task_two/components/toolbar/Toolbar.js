import React from 'react';
import PropTypes from 'prop-types';
import ToolbarItem from './ToolbarItem';

function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props;

  return(
    <div className="toolbar toolbar-collapse">
      <ul className="toolbar-list">
        {filters.map( (item, index) => {
          const items = {
            name: item,
            active: selected,
            onClick: onSelectFilter
          }
          return <ToolbarItem key={index} items={items} onClick={onSelectFilter}/>
        })}
      </ul>
    </div>
  )
}

export default Toolbar;
