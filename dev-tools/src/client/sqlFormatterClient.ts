import { BaseClient } from "./baseClient";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SqlFormatterModel } from "../models/sqlFormatterModel";

@Injectable({
    providedIn: 'root'
})

export class SqlFormatterClient extends BaseClient {
    constructor() {
        super("/sql-formatter");
    }

    format(sql: SqlFormatterModel): Observable<any> {
        return this.post("/format", sql);
    }
}