/// <reference types="node" />
import { ClientRequest } from 'http';
import type { Observer, Resolver } from '../../createInterceptor';
import { NormalizedClientRequestArgs } from './utils/normalizeClientRequestArgs';
import { ClientRequestWriteArgs } from './utils/normalizeClientRequestWriteArgs';
export declare type Protocol = 'http' | 'https';
export interface NodeClientOptions {
    observer: Observer;
    resolver: Resolver;
}
export declare class NodeClientRequest extends ClientRequest {
    /**
     * The list of internal Node.js errors to suppress while
     * using the "mock" response source.
     */
    static suppressErrorCodes: string[];
    private url;
    private options;
    private response;
    private resolver;
    private observer;
    private log;
    private chunks;
    private responseSource;
    private capturedError?;
    requestBody: Buffer[];
    constructor([url, requestOptions, callback]: NormalizedClientRequestArgs, options: NodeClientOptions);
    write(...args: ClientRequestWriteArgs): boolean;
    end(...args: any): this;
    emit(event: string, ...data: any[]): boolean;
    private respondWith;
    /**
     * Terminates a pending request.
     */
    private terminate;
    private getRequestBody;
    private toIsomorphicRequest;
}
