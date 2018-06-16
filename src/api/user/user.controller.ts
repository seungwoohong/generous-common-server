/**
 * @fileoverview User API Controller
 */
'use strict';

import pool from '../../config/db-config';
import { Request, Response, NextFunction } from 'express';

/**
 * mock data
 */
const mock = {
    id: 'test',
    password: 'testpassword'
};

export class UserController {
    constructor() {};

    handler(req: Request, res: Response ) {
        if (mock.id !== 'test' || mock.password !== 'testpassword') {
            res.status(400).json({
                msg: 'Error - Invalid data'
            });
            return;
        }

        res.status(200).json(mock);
    }
}
