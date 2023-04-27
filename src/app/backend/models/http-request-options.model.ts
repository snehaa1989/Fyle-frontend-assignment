import {HttpHeaders, HttpParams, HttpContext} from '@angular/common/http';
export interface HttpRequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
    context?: HttpContext;
}
