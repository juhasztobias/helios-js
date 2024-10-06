// This file will be used to set a base router Framework.
// It might be useful to have a only one router kind.
// Example: Express.js, Koa, Hono, Fastify.

type RouterType = {
    get: (path: string, handler: any) => void;
    post: (path: string, handler: any) => void;
    put: (path: string, handler: any) => void;
    delete: (path: string, handler: any) => void;
    patch: (path: string, handler: any) => void;
    options: (path: string, handler: any) => void;
    head: (path: string, handler: any) => void;
    all: (path: string, handler: any) => void;
    use: (path: string, handler: any) => void;
}

export default class BaseRouter {
    // This is the constructor of the base router.
    static baseInstance: BaseRouter | null = null;
    router: RouterType | null = null;

    static getInstance = () =>
        BaseRouter.baseInstance
        ?? (BaseRouter.baseInstance = new BaseRouter());


    constructor() { }
    public setBaseRouter(router: RouterType) {
        this.router = router;
    }

    public getRouter() {
        return this.router;
    }
}