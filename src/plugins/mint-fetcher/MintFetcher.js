import TypeMaker from './TypeMaker';
import Store from './store';

window.Store = Store
export default class MintFetcher {
    constructor(endpoint) {
        this.endpoint = endpoint
        this.fetcher = new Fetcher(endpoint);
    }

    async getArtists() {
        // has artists stored
        let storeArtists = Store.artists && Store.artists.length > 0 ? Store.artists : false;

        if (!storeArtists) {
            // has artists stored OR from backend OR fetch
            const raw = __INITIAL_DATA__.artists || (await this.fetcher.get('/artists'));
            const artists = raw
                    .map(TypeMaker.makeArtist);
            
            Store.artists = artists;
        }
        
        return Store.artists;
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