import { Component } from 'angular2/core';
import { Bookmark } from './bookmark.component';
import { BookmarkComponent } from './bookmark.component';

// The ListComponent metadata defines the component's selector,
// the url of the template and the directives used in this template.
@Component({
    selector: 'sp-list',
    templateUrl: './templates/list.html',
    directives: [ BookmarkComponent ]
})

export class ListComponent { }
