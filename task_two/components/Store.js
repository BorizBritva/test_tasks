import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardsView from './product_card/CardsView';
import ListView from './product_list/ListView';
import IconSwitch from './icons_switch/IconSwitch';

function Store(props) {
  const product=props.items;
  const [icon, setIcons] = useState("view_list")

  const handleSwitch = () => {
    setIcons(prevIcon => {
      return prevIcon==="view_list" ? "view_module" : "view_list"
    })
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={handleSwitch}/>
      {icon==="view_module" ? <ListView items={product} /> : <CardsView items={product}/>}
    </>
  )
}

Store.propTypes = {
  items: PropTypes.array.isRequired
}

export default Store;
