import * as WebSocket from 'ws';
import { WebSocketAdapter, MessageMappingProperties, INestApplicationContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class WsAdapter implements WebSocketAdapter {
    private readonly app;
    constructor(app: INestApplicationContext);
    create(port: number, options?: any): any;
    bindClientConnect(server: any, callback: (...args: any[]) => void): void;
    bindMessageHandlers(client: WebSocket, handlers: MessageMappingProperties[], process: (data: any) => Observable<any>): void;
    bindMessageHandler(buffer: any, handlers: MessageMappingProperties[], process: (data: any) => Observable<any>): Observable<any>;
    close(server: any): void;
}
