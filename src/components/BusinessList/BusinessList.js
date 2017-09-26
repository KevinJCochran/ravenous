import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        const list = this.props.businesses.map( (business, index) =>
            <Business key={index} business={business} />
        );
        return (
            <div className="BusinessList">
                {list}
            </div>
        );
    }
}

export default BusinessList;