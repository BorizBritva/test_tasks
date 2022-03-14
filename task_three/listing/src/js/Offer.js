import PropTypes from 'prop-types';

function Offer({items}) {
  const {MainImage: {url_570xN: img_url}, url, title, currency_code, price, quantity} = {...items}
  const currency = currency_code==="USD" ? "$" : currency_code==="EUR" ? "€" : "GBP"
  
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img_url} alt={title}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title.length > 50 ? `${title.slice(0, 51)}...`: title}</p>
        <p className="item-price">{currency + price}</p>
        <p className={`item-quantity level-${quantity <= 10 ? 'low' : quantity <= 20 ? 'medium' : 'high'}`}>{`${quantity} left`}</p>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  url: "#",
  img_url: "#",
  title: "None",
  price: 0,
  quantity: "GBP"
}

Offer.propTypes = {
  url: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired
}

export default Offer
