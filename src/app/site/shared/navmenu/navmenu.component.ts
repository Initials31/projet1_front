import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor( private router: Router,private authService: AuthService) { 
  }

  ngOnInit() {
  }

  showplayers(){
    this.router.navigate(['/players']);
 }

 showevents(){
  this.router.navigate(['/events']);
}

showcontests(){
  this.router.navigate(['/contests']);
}

accueil(){
  this.router.navigate(['/']);
}
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  isAuth():boolean{
    if (this.authService.isLoggedIn){
      return true;
    }
    return false;
  }
}
