import { Component, Input } from '@angular/core';

export interface ListItem {
    name?: string;
    flag?: string,
    capital?: string,
    region?: string,

}

@Component({
    selector: 'list-item',
    template: `
    {{item.name}}
    `
})
export class ListItemComponent {
    @Input()
    item: ListItem;
}