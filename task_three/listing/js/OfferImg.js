import PropTypes from 'prop-types';

function OfferImg({title, offer_url, img_url}) {
  return (
    <div className="item-image">
        <a href={offer_url}>
          <img src={img_url} alt={title} />
        </a>
    </div>
  )
}

OfferImg.defaultProps = {
  img_url: "#"
}

OfferImg.propTypes = {
  title: PropTypes.string.isRequired,
  offer_url: PropTypes.string.isRequired
}

export default OfferImg
