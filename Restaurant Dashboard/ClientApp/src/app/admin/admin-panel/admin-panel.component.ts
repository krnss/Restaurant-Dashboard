import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  href:string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.href = this.router.url
      }
    });
   }

  ngOnInit(): void {

  }

}
