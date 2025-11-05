export declare const hasOwnProperty: (v: PropertyKey) => boolean;
declare const config: {
    existList: (number | boolean)[];
    setData(data: Record<PropertyKey, any>, prop: PropertyKey, value: any): void;
    url: {
        protocolPort: {
            'http:': string;
            'https:': string;
            'ftp:': string;
        };
    };
};
export default config;
