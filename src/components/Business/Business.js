import React from 'react';
import './Business.css';

class Business extends React.Component {
  mapUrl() {
    const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
    let searchTerms =
      this.props.business.name +
      '%2C' +
      this.props.business.address +
      '%2C' +
      this.props.business.city +
      '%2C' +
      this.props.business.state +
      '%2C' +
      this.props.business.zipCode;
    searchTerms = searchTerms.replace(/ /g, '+');
    return baseUrl + searchTerms;
  }

  render() {
    return (
      <div className="business">
        <div className="image-container">
          <a
            href={this.props.business.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={this.props.business.imageSrc}
              alt={this.props.business.name}
            />
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="business-information">
          <div className="business-address">
            <a href={this.mapUrl()} target="_blank" rel="noopener noreferrer">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
            </a>
          </div>
          <div className="business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
