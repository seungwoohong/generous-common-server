/**
 * @fileoverview Route infomation model
 */

'use strict';

export class RouterWrap {
    method: string;
    url: string;
    handler: Function;

    constructor(method: string, url: string, handler: Function) {
        this.method = method;
        this.url = url;
        this.handler = handler;
    }
};
