const YELP_API_KEY = `${process.env.REACT_APP_API_KEY}`;
const CORS_API_KEY = `${process.env.REACT_APP_CORS_API_KEY}`;

const Yelp = {
  search: async (term, location) => {
    const response = await fetch(
      `https://cors.bridged.cc/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=best_match`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          'x-cors-grida-api-key': CORS_API_KEY,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map((business) => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          url: business.url,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          display_phone: business.display_phone,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        };
      });
    }
  },
};

export default Yelp;
