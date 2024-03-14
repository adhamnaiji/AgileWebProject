import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { SharedService } from '../../app/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-taches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-taches.component.html',
  styleUrl: './users-taches.component.css'
})
export class UsersTachesComponent implements OnInit {
taches: any[]=[];

  login: any;
  userinfo!: any;
  infou: any;
  constructor(private agentservice:AgentService,private sharedservice:SharedService){

  }


  ngOnInit(): void {
    this.login = this.sharedservice.login;
      console.log(this.sharedservice.getl());

      this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);

    this.agentservice.gettaches(this.infou.id).subscribe(p=>{
      console.log(p);
      this.taches.push(JSON.stringify(p));
      
    })

    console.log(this.taches);
  }





}
