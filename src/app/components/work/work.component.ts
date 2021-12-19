import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  myPortfolio:any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data =>{
      console.log(data);
      this.myPortfolio = data;
    });
  }

 

  buttonTitle={
    pokeBattle:"Play",
    github:"See"
  }

}
