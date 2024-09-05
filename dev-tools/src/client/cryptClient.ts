import { BaseClient } from "./baseClient";
import { CryptProvider } from '../enums/cryptProvider';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CryptoClient extends BaseClient {
    constructor() {
        super("/crypt");
    }

    encrypt(text: string, key: string, provider: CryptProvider): Observable<string> {
        let params = new HttpParams()
            .set('text', text)
            .set('key', key)
            .set('cryptProvider', provider);

        return this._httpClient.get(this.getFullUrl("/encrypt"), {
            responseType: "text",
            params: params,
        });
    }

    decrypt(text: string, key: string, provider: CryptProvider): Observable<string> {
        let params = new HttpParams()
            .set('text', text)
            .set('key', key)
            .set('cryptProvider', provider);

        return this._httpClient.get(this.getFullUrl("/decrypt"), {
            responseType: "text",
            params: params,
        });
    }
}