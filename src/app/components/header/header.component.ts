import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  list = {
    name:"Daniel",
    about:"About",
    work:"Work",
    my_skills:"My Skills",
    contact:"Contact",

    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
