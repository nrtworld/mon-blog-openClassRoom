import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  isAuth: boolean;
  @Input() appareilName: string;
  @Input() appareilStatut: string;
  @Input() index: number;
  @Input() id: number;
  constructor(private appareilService: AppareilService, private authService: AuthService) {
    
   }

  ngOnInit() {
  }


  getStatut(){
    return this.appareilStatut;
  }

  getColor(){
    if(this.appareilStatut === 'allumé'){
      return 'green';
    }else if(this.appareilStatut === 'éteint'){
      return 'red';
    }
  }

  onAllumerOne(i: number){
    
    this.appareilService.switchOnOne(i);
   
  }

  onEteindreOne(i: number){
    
    this.appareilService.switchOffOne(i);
  
  }

  onSwitch() {
    if(this.appareilStatut === 'allumé') {
     
      this.appareilService.switchOffOne(this.index);
    
    } else if(this.appareilStatut === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
}

getAuth(){
  return this.authService.isAuth;
}
}
