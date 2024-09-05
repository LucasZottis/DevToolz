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
    protected title: Title = inject(Title);

    protected setTitle(title: string): void {
        this.title.setTitle("Dev Toolz - " + title);
    }

    protected addDescription(description: string) {
        this.meta.addTag({
            name: "description",
            content: description,
        });
    }

    ngOnDestroy(): void {
        this.meta.removeTag("name='description'");
    }
}