import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('project1', [
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-300%)'}))
      ])
    ]),
    trigger('project2', [
      transition(':leave', [
        animate('650ms ease-in', style({transform: 'translateY(-500%)'}))
      ])
    ]),
    trigger('project3', [
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(-700%)'}))
      ])
    ]),
    trigger('icons', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
    menu: boolean = false;
    projects: boolean = false

  

  constructor() { }

  ngOnInit() {
    
  }
  toggleMenu(){
    this.menu = !this.menu;
  }

  toggleProjects(){
    this.projects = !this.projects
  }
}
