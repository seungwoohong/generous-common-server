/**
 * @fileoverview Server config
 * @todo 도커를 통해 환경별로 서버 정보 분리
 */
'use strict';

const environments = {
    port: Number(process.env.PORT) || 1226,
    dbServer: process.env.HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 3306,
    dbUser: process.env.DB_USER || 'root',
    dbPassword: process.env.DB_PASSWORD || '0000',
    dbUseSchema: process.env.DB_SCHEMA || 'test'
}

export default environments;
