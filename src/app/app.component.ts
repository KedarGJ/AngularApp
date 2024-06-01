import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  skills : Array<string> = ["JS","TS","Angular","Node"];
  players : Array<string> = ["virat","sachin","head","gayle"]
}
