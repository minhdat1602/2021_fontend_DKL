import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';

  showHead: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event['url']);
        if (event['url'] == '/login' || event['url'] == '/west-point-introduce') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
