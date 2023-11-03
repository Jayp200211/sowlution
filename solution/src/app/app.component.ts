import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solution';
  searchText='';
  text=`On Wikipedia and other sites running on MediaWiki, Special:Random can be used to access a random article in the main namespace; this feature is useful as a tool to generate a random article. Depending on your browser, it's also possible to load a random page using a keyboard shortcut (in Firefox, Edge, and Chrome Alt-Shift+X).

  To create a link to a random page in a different namespace, use [[Special:Random/Namespace]]. For example, Special:Random/Talk will take you to a random article's talk page.`
}
