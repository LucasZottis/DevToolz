import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { environment } from "../environments/environment.development";

export class BaseClient {
    protected _httpClient: HttpClient = inject(HttpClient);

    private headers = {
        'content-type': 'application/json',
        'Accept': 'application/json'
    };

    constructor(
        private _urlBase: string | undefined,
    ) { }

    protected getFullUrl(endPoint: string) {
        return environment.apiHttpUrl + this._urlBase + endPoint;
    }

    protected postAndReturn<TModel, TReturn>(endPoint: string, model: TModel): Observable<TReturn> {
        return this._httpClient.post<TReturn>(this.getFullUrl(endPoint), model, { 'headers': this.headers });
    }

    protected post<TModel>(endPoint: string, model: TModel): Observable<string> {
        return this._httpClient.post<string>(this.getFullUrl(endPoint), model, { 'headers': this.headers });
    }

    protected put<TModel>(endPoint: string, model: TModel): Observable<any> {
        return this._httpClient.put(this.getFullUrl(endPoint), model);
    }

    protected get<TReturn>(endPoint: string): Observable<TReturn> {
        return this._httpClient.get<TReturn>(this.getFullUrl(endPoint));
    }

    protected getText(endPoint: string, params?: any): Observable<string> {
        return this._httpClient.get(this.getFullUrl(endPoint), {
            responseType: "text",
        });
    }

    // protected get<TReturn>(endPoint: string, options?: any): Observable<TReturn> {
    //     return this._httpClient.get<TReturn>(this.getFullUrl(endPoint), options);
    // }

    protected delete(endPoint: string): Observable<any> {
        return this._httpClient.delete(this.getFullUrl(endPoint));
    }

    healthCheck(): Observable<string> {
        return this._httpClient.get<string>(environment.apiHttpUrl + "/check", { responseType: 'text' as 'json' });
    }
}