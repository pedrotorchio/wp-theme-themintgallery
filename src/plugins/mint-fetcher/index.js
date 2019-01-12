import Vue from 'vue';
import MintFetcher from './MintFetcher';


const plugin = {
    install( Vue, options ) {

        let baseUrl = options && options.baseUrl

        baseUrl = baseUrl || __APIURL__ || false;

        if (!baseUrl)
            throw ("Missing api endpoint");

        Vue.prototype.$fetcher = new MintFetcher(`${baseUrl}/wp/v2`);

    }
}

Vue.use(plugin);