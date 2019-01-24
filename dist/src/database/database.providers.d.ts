export declare const DbConnectionToken = "DbConnectionToken";
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<any>;
}[];
