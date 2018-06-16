/**
 * @fileoverview Server runner
 */

'use strict';
import * as express from 'express';
import * as fs from 'fs';

// Middleware
import * as bodyParser from 'body-parser';
import responseHeader from './middleware/response-setting';

class App {
    public app: express.Application;
    private _api: string = __dirname + '/api/';
    private _routes: Array<any> = [];
    private _r: any = express.Router();

    constructor() {
        this.app = express.default();
        this._middleware();
        this._route();
    }

    private _route() {
        fs.readdirSync(this._api).forEach(path => {
            this._routes = this._routes.concat(require(this._api + path).routerWrap);
        });

        this._routes.forEach(r => {
            this._r[r.method](r.url, r.handler);
        });

        this.app.use('/', this._r);
    }

    private _middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(responseHeader());
    }
}

export default new App().app;
