import { BaseClient } from "./baseClient";
import { CryptProvider } from '../enums/cryptProvider';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { SqlFormatterModel } from "../models/sqlFormatterModel";

@Injectable({
    providedIn: 'root'
})

export class SqlFormatter extends BaseClient {
    constructor() {
        super("/sql-formatter");
    }

    format(sql: SqlFormatterModel): Observable<string> {
        return this.get("format", )
    }
}