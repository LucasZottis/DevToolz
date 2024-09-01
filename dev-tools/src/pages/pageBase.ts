import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [],
    template: '',
})

export class PageBase implements OnDestroy {
    constructor(
        private _meta: Meta,
        private _title: Title
    ) { }

    protected setTitle(title: string): void {
        this._title.setTitle("Calculadora Dev - " + title);
    }

    protected addDescription(description: string) {
        this._meta.addTag({
            name: "description",
            content: description,
        });
    }

    ngOnDestroy(): void {
        this._meta.removeTag("name='description'");
    }
}