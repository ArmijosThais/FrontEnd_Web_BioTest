import { Component } from '@angular/core';

@Component({
  selector: 'lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLAB';
  expanded = true

  toggleExpanded(expanded:boolean){
    this.expanded = expanded
  }
}
