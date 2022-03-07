import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
  const products=props.items;

  return (
    <div className="product-card-wrap">
      <ul className="product-card-grid">
        {
          products.map((item, index) => {
            return <ShopCard key={index} items={item}/>
          })
        }
      </ul>
    </div>
  )
}

CardsView.propTypes = {
  items: PropTypes.array.isRequired
}

export default CardsView;
