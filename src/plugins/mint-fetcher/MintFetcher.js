import TypeMaker from './TypeMaker';
import Store from './store';

window.Store = Store
export default class MintFetcher {
    constructor(endpoint) {
        this.endpoint = endpoint
        this.fetcher = new Fetcher(endpoint);
        window.store = Store
    }

    async getArtists() {
        const artists = await this.fetch( 'artists', raw => raw.map(TypeMaker.makeArtist) );
        return artists;
    }
    async getArtist(slug) {
        let artists = await this.getArtists(); 
        
        let artist = artists.find( a => a.slug == slug );

        return artist;
    }
    async getSlides() {
        
        const slides = await this.fetch( 'slides', raw => raw.map(TypeMaker.makeSlide) );
        
        return slides;
    }

    async fetch(what, callback, predicate = storeValue => storeValue.length > 0) {
        let data = predicate(Store[what]) && Store[what] || false;

        if (!data) {
            // has artists stored OR from backend OR fetch
            const raw = __INITIAL_DATA__[what] || (await this.fetcher.get(`/${what}`));
            
            data = callback(raw)
            
            Store[what] = data
        }

        return data
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