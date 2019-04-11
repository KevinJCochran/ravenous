const clientID = 'v4Lv4z9fI2EmrXeI3_FCxg';
const secret = 'ybPPIGCdz2sbdU8HxlpS1CkTS13UkWSmPeFnUlXHbxAlxkuzOsgLOjchyEcveoui';
const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`;
const API_KEY = 'rgmptxLMmPXhRZ94Don1LZk-hLMAiF_iESiQaJelBHqG2H4Yk3oUbfnqklJI_RHRTKlRS3B6EAPFAhwC3ST7vOaRX67RxOWy4oG6rqXQ9Qr9a28FLuhOkbGoMQnLWXYx';
let accessToken;

export const Yelp = {
    search: (term, location, sortBy) => {
        let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(url, { headers: { Authorization: `Bearer ${API_KEY}` } }).then( response => {
            return response.json();
        }).then( jsonResponse => {
            if(jsonResponse.businesses) {
                console.log('Number of businesses found: ' + jsonResponse.businesses.length);
                return jsonResponse.businesses.map( business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
    }
};
