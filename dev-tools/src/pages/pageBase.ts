import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [],
    template: '',
})

export class PageBase implements OnDestroy {
    protected meta: Meta = inject(Meta);
    protected pageTitle: Title = inject(Title);

    protected set title(value: string) {
        this.pageTitle.setTitle(value + " | Dev Toolz");
    }

    protected set description(value: string) {
        this.meta.addTag({
            name: "description",
            content: value,
        });
    }

    protected set robots(value: string) {
        this.meta.addTag({
            name: "robots",
            content: value,
        });
    }

    protected set keywords(value: string) {
        this.meta.addTag({
            name: "keywords",
            content: value,
        });
    }

    protected setTitle(title: string): void {
        this.pageTitle.setTitle("Dev Toolz - " + title);
    }

    protected addDescription(description: string) {
        this.meta.addTag({
            name: "description",
            content: description,
        });
    }

    ngOnDestroy(): void {
        this.meta.removeTag("name='description'");
        this.meta.removeTag("name='robots'");
        this.meta.removeTag("name='keywords'");
    }
}