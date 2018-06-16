/**
 * @fileoverview Routes config setting
 */
'use strict';

import { UserController } from './user.controller';
import { RouterWrap } from '../../model/RouterWrap';

export const routerWrap: RouterWrap[] = [
    {
        method: 'get',
        url: '/user',
        handler: new UserController().handler
    }
];
