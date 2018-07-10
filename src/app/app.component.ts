import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
secondes: number;


  



  constructor(){
   setTimeout(
()=>{this.isAuth = true;},4000
    );
  }

  ngOnInit(){
    const counter = interval(1000);

    counter.subscribe(
      (value)=>{
        this.secondes = value;
      },
      (error)=>{
        console.log('ah zut, une erreur, comme c\'est ballot : ' + error);
      },
      ()=>{
        console.log('Observable complete');
      }
    );
  }


}
