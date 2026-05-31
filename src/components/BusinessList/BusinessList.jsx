import Business from '../Business/Business'
import './BusinessList.css'

function BusinessList({businesses}) {
    return (
        <div className="BusinessList">
            {businesses.map((business, index) => (
                <div key={index} className="BusinessList">
                    <Business business={business}/>
                </div>
            ))}
        </div>
    );
}

export default BusinessList