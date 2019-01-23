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
    async getSlide(slug) {
        const page = await this.fetch( `slides?slug=${slug}`, raw => TypeMaker.makeSlide(raw[0]) )

        return page
    }
    async getPage(slug) {
        const page = await this.fetch( `pages?slug=${slug}`, raw => TypeMaker.makePage(raw[0]) )

        return page
    }

    async fetch(what, callback, predicate = storeValue => storeValue.length > 0) {
        let data = Store[what] && predicate(Store[what]) && Store[what] || false;
        let raw = null
        if (!data) {
            // has artists stored OR from backend OR fetch
            try {
                raw = __INITIAL_DATA__[what] || await this.fetcher.get(`/${what}`);

                if (!raw)
                    throw "No data received";

            } catch (error) {
                raw = false
            }

            data = raw && callback(raw)
            
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
            .then( response => {
                if(!response.ok)
                    throw 'error';

                return response
            })
            .then( data => data.json() )
    }
}