import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

    appareils: any[];
  
    
    lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
    constructor(private appareilService: AppareilService, private authService: AuthService) {

     }
  
    ngOnInit() {
      this.appareils = this.appareilService.appareils;
    }
  
    onAllumer() {
      this.appareilService.switchOnAll();
    }
  
    onEteindre() {
      if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
        this.appareilService.switchOffAll();
      } else {
        return null;
      }
    }

    getAuth(){
      return this.authService.isAuth;
    }
  

}
