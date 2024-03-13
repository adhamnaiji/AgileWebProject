import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Router } from '@angular/router';
import { agents_list } from '../../data';
import { SharedService } from '../../app/shared.service';

@Component({
  selector: 'app-agentdetails',
  standalone: true,
  imports: [],
  templateUrl: './agentdetails.component.html',
  styleUrl: './agentdetails.component.css'
})
export class AgentdetailsComponent implements OnInit {
  curentAg:any;

  constructor(private agentservice:AgentService,private router:Router,private sharedservice:SharedService){
   this.curentAg= this.agentservice.agentdet;

  }
  ngOnInit(): void {
    this.curentAg= this.agentservice.agentdet;

  }

  reserver(curentid:any){
    if(this.curentAg.Availability){
      console.log(JSON.stringify(this.sharedservice.getl()));
      if(this.sharedservice.getl()){
        alert("you reserved the agent  "+this.curentAg.name+"");
        agents_list.find(agent => {
          if(agent.id === curentid){
  agent.Availability=false;
         }
  
        });
      }
      else{
        alert("you should login first");

      }
      
      
      console.log("after changes"+this.curentAg);
 

    }
    else if(!this.curentAg.Availability){
      alert("the user named  "+this.curentAg.name+" is already reserved");

    }

  }

  

}
