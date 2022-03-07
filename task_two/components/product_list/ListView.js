import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
  const products=props.items;

  return (
    <div className="product-list-wrap">
      <ul className="product-list-grid">
        {
          products.map((item, index) => {
            return <ShopItem key={index} items={item}/>
          })
        }
      </ul>
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListView;
