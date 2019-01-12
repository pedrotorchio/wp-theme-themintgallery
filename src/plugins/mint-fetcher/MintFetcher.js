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
        return (__INITIAL_DATA__.artists || this.fetcher.get('/artists')).map(TypeMaker.makeArtist);
    }
    
}