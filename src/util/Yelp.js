import $ from 'jquery';

const clientID = 'v4Lv4z9fI2EmrXeI3_FCxg';
const secret = 'ybPPIGCdz2sbdU8HxlpS1CkTS13UkWSmPeFnUlXHbxAlxkuzOsgLOjchyEcveoui';
const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`;
let accessToken;

/*export const Yelp = {
    getAccessToken: () => {
        if(!accessToken) {
            $.post(url, response => {
                console.log(response);
                accessToken = response.access_token;
            });
        }
    },

    search: (term, location, sortBy) => {
        let results = [];
        let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        $.get({
            url: url,
            headers: { Authorization: `Bearer ${accessToken}` },
            success(data) {
                console.log(data.businesses.length);
                results = data.businesses;
            }
        });

        $.get(url, data => {
            console.log(data.businesses.length);
            results = data.businesses;
        },'json');
        return results;
    }
};*/

export const Yelp = {
    getAccessToken: () => {
        if(accessToken) {
            return new Promise(resolve => resolve(accessToken));
        }
        return fetch(url, {method: 'POST'}).then( response => {
            return response.json();
        }).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
        });
    },
    search: (term, location, sortBy) => {
        return Yelp.getAccessToken().then( () => {
            let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
            return fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } }).then( response => {
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
        });
    }
};
