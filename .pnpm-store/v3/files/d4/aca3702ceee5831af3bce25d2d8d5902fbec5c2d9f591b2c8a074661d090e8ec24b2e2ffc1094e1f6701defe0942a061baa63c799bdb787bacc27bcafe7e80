import { MockedRequest, RequestHandler } from '../../handlers/RequestHandler';
export interface UnhandledRequestPrint {
    warning(): void;
    error(): void;
}
export declare type UnhandledRequestCallback = (request: MockedRequest, print: UnhandledRequestPrint) => void;
export declare type UnhandledRequestStrategy = 'bypass' | 'warn' | 'error' | UnhandledRequestCallback;
export declare function onUnhandledRequest(request: MockedRequest, handlers: RequestHandler[], strategy?: UnhandledRequestStrategy): void;
