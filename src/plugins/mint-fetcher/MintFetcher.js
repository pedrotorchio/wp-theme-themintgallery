import axios from 'axios'

import TypeMaker from './TypeMaker';

export default class MintFetcher {
    constructor(endpoint) {
        this.endpoint = endpoint
        this.fetcher = axios.create({
            baseURL: endpoint
        });
        this.fetcher.interceptors.response.use(response => response.data, error => Promise.reject(error));
    }

    async getArtists() {
        const data = __INITIAL_DATA__.artists || (await this.fetcher.get('/artists'));
        
        return data
                    .map(TypeMaker.makeArtist);
    }
    
}