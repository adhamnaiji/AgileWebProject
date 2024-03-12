import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { environment } from '../../environments/environments';
import { CommonModule, NgIf } from '@angular/common';
import { AppComponent } from '../../app/app.component';
import { AgentService } from '../services/agent.service';
import { SharedService } from '../../app/shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent,RouterModule,CommonModule,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
login:any=null;


constructor(private router:Router,public agentservice:AgentService,private sharedservice:SharedService){

}
  ngOnInit(): void {
    
      this.login = this.sharedservice.login;
    };
  

  GoToSignIn():void {
    console.log("this button works fine");
    //console.log(environment.login);
    // new AppComponent().logout();
    this.router.navigate(['/signin']);
  }

  get getll(){
    return this.sharedservice.getl();
  }

   getllout(){
     this.sharedservice.getout();
  }


  



}
