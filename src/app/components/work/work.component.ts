import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myProjects=[{
    pokeProject:{
      name:"Pokemon Battle Name",
      description: "technology web components",
      url:"https://vieradaniel.github.io/DD-TrabajoFinal-Frontend2020/",
      image:"https://miro.medium.com/max/1400/1*j7dwLFVWjLVRPQFTjMsmgg.jpeg"

    },
    github:{
      name:"Github clone",
      description: "static github clone",
      url:"https://vieradaniel.github.io/DD-TrabajoIntermedio2020-FE/",
      image:"https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png"
    }
  
  }]

  buttonTitle={
    pokeBattle:"Play",
    github:"See"
  }

}
