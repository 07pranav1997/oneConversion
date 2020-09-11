import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Project';

  showMsg = true;
  colorName = 'green';
  switchVal = 0;

  users = [
    { userId: 1, firstname: 'john' },
    { userId: 2, firstname: 'jackson' },
    { userId: 3, firstname: 'jenny' },
    { userId: 4, firstname: 'robin' },
    { userId: 5, firstname: 'sherry' },
    { userId: 6, firstname: 'jack' }
  ];

  clsName = 'one';
  clsName2 = 'two';

  colorVal = 'green';
  placeHolderVal = 'Enter Value'

  hrefVal = 'https://getcomics.info/';

  updatedLink = 'https://comicbook.com/';

  showAlert(name) {
    alert("Hello " + name);
  }

  consoleLog() {
    console.log('From the input focus event');
  }

  fname = "Pranav";

  ShowFName(fname) {
    alert(fname)
  }

  user = {
    userId: 20,
    name: 'Pranav Ray',
    DOB: '09/07/1997',
    stipend: 15000.66
  };
  
  readMe() {
    console.log('button clicked');
  }
}
