import TypeMaker from './TypeMaker';
import Store from './store';

window.Store = Store
export default class MintFetcher {
    constructor(endpoint) {
        this.endpoint = endpoint
        this.fetcher = new Fetcher(endpoint);
    }

    async getArtists() {
        let artists = Store.artists.length > 0 ? Store.artists.length : false;

        const data = __INITIAL_DATA__.artists || artists || (await this.fetcher.get('/artists'));
        
        artists = data
                    .map(TypeMaker.makeArtist);
        
        Store.artists = artists;

        return artists;
    }
    async getArtist(slug) {
        let artists = await this.getArtists(); 
        
        let artist = artists.find( a => a.slug == slug );

        return artist;
    }
    
}

class Fetcher {
    constructor(baseurl) {
        this.baseurl = baseurl
    }
    async get(endpoint, params) {
        endpoint = `${this.baseurl}${endpoint}`;

        var url = new URL(endpoint)

        if (params)
            Object
                .keys(params)
                .forEach(key => url.searchParams.append(key, params[key]));

        return fetch(url, {
            method: 'GET'
        })
            .then( data => data.json() )
    }
}