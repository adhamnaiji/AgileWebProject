import { Component, NgModule, OnInit } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { AgentService } from '../services/agent.service';
import {ActivatedRoute, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-agents-page',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,SearchComponent],
  templateUrl: './agents-page.component.html',
  styleUrl: './agents-page.component.css'
})
export class AgentsPageComponent implements OnInit {
  agents:Agent[]=[];

  constructor( private agentservice:AgentService,private activeroute:ActivatedRoute){
   
    
  }
  
  ngOnInit(): void {
    this.activeroute.params.subscribe((params)=>{
      if(params.searchterm){
        this.agents=this.agentservice.getAllAgentBySearch(params.searchterm);
      console.log(this.agentservice.getAllAgentBySearch(params.searchterm));
    }
    else {
    this.agents=this.agentservice.getAllAgents();
  
  
  }

  })
  
  }
}
  


