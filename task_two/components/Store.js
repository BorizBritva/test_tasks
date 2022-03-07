import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardsView from './product_card/CardsView';
import ListView from './product_list/ListView';

function Store(props) {
  const product=props.items;

  return (
    <CardsView items={product} />
  )
}

Store.propTypes = {
  items: PropTypes.array.isRequired
}

export default Store;
