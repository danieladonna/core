/// <reference types="node" />
import url = require('url');
import events = require('events');
import express = require('express');
declare class mlcl_core extends events.EventEmitter {
    static mlclconfig: any;
    static rootPath: any;
    static instance: any;
    protected modules: any;
    protected booting: Array<Boolean>;
    config: any;
    app: express.Application;
    protected serveStatic: any;
    log: any;
    serverroles: any;
    servers: Array<any>;
    constructor(mconfig: any);
    setServerInstance(server: any): void;
    markModuleInitStart(module: any, name: any): void;
    markModuleInitComplete(module: any, name: any): void;
    initModules(callback: any): void;
    initModule(item: any, callback: any): void;
    getModule(name: any): any;
    require(name: any): any;
    parseRequest(req: any): url.Url;
    initApplication(app: any): void;
    checkPermission(item: any, req: any, res: any, next: any): void;
    dispatch(callbacks: any, req: any, res: any, next: any): void;
    locals(req: any, res: any, next: any): void;
    setContent(res: any, region: any, data: any): void;
    getContent(res: any): any;
}
export = mlcl_core;