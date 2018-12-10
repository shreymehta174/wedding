/**
 * Exports a client for the API exposed by the server.
 */

'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class APIClient {

    constructor(apiUrl) {
        this._apiUrl = apiUrl;
    }

  
}

export default APIClient;
