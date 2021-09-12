import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';

  showHead: boolean = false;

  OnInit(): void {
    AOS.init();
  }

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event['url']);
        if (event['url'] == '/login' || event['url'] == '/west-point-introduce' || event['url'] == '/project-description') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
