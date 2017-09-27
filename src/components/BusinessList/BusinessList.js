import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        const list = this.props.businesses.map( (business) =>
            <Business key={business.id} business={business} />
        );
        return (
            <div className="BusinessList">
                {list}
            </div>
        );
    }
}

export default BusinessList;