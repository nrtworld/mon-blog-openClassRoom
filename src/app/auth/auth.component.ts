import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatut: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  
  ngOnInit() {
  this.authStatut = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn()
        console.log('sign in successful!');
        this.authStatut = this.authService.isAuth;
        this.router.navigate(['appareils']);
     
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatut = this.authService.isAuth;

  }

}
