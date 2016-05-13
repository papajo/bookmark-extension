import { Component } from 'angular2/core';

// We are using an interface to represent a bookmark.
// A single bookmark is now strongly typed:
// it has to have two properties "name" and "url",
// which both must be a string.
interface Bookmark {
  name : string,
  url : string
}

@Component({
    selector: 'sp-bookmark',
    templateUrl: './templates/bookmark.html'
})

export class BookmarkComponent {

  // The bookmark property is of the type "Bookmark",
  // defined in the interface above.
  bookmark : Bookmark = {
   name : 'google',
   url : 'https://google.com'
  }

  // Setting the default value for the "submitted" property.
  submitted = false;

}
