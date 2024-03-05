import { Injectable } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { agents_list } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor() { }

  getAllAgents():Agent[]{
    return agents_list;
  }

  getAllAgentBySearch(searchterm:string){
    return this.getAllAgents().filter(agent => agent.name.toLowerCase().includes(searchterm.toLowerCase()));
  }
}
