// Update with your config settings.
'use strict';
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/' /**FIXME*/
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};
