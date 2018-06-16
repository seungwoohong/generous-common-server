/**
 * @fileoverview Response setting
 */

'use strict';

import { Request, Response, NextFunction } from 'express';

const configs: { [key: string]: any } = {
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': true
};

export default () => {
    return (req: Request, res: Response, next: NextFunction) => {
        var origin = req.headers.origin || req.headers.host;

        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        Object.keys(configs).forEach((cell: string) => {
            res.setHeader(cell, configs[cell]);
        });

        next();
    }
}
