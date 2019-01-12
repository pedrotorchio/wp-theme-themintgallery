import WPApi from 'wpapi';

const plugin = {
    install( Vue, options ) {
        const { baseUrl } = options;

        baseUrl = baseUrl || __API_URL__;

        if (!baseUrl)
            throw ("Missing api endpoint");

        Vue.prototype.$wpapi = new WPApi({
            endpoint: baseUrl
        });

    }
}

