import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, searchText: string, type: string): string {
    if (!searchText) return value;

    let flags = 'igm';
    if (type !== 'full') {
      flags = 'ig'; 
    }

    const regex = new RegExp(searchText, flags);
    const highlightedValue = value.replace(regex, match => {
      return `<span class="highlighted-text">${match}</span>`;
    });

    return highlightedValue;
  }
}
