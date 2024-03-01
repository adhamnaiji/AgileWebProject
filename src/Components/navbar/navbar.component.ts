import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router:Router){

}

  GoToSignIn():void {
    console.log("this button works fine");
    this.router.navigate(['/signin']);
  }



}
