/**
 * @fileoverview Database
 */
'use strict';

import env from './server-config';
import * as mysql from 'mysql';

const pool = mysql.createPool({
    host: env.dbServer,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbUseSchema
});

export default pool;
