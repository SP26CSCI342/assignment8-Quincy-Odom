// src/util/yelp.js

const SEARCH_PATH = "/api/yelp/businesses/search";

async function searchBusinesses(term, location, sortBy) {

    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    const res = await fetch(`${SEARCH_PATH}?${params}`);
    if (!res.ok) {
        throw new Error(`Yelp requesst failed (${res.status})`);
    }
    const business = await res.json();
    console.log(business)

    return business.businesses.map(b => 
       (
            {
            imageSrc: b.image_url,
            name: b.name,
            address: b.location.address1,
            city: b.location.city,
            zipCode: b.location.zip_code,
            category: b.categories[0].title,
            rating: b.rating,
            reviewCount: b.review_count
            }
       )
     );

}

export default searchBusinesses;