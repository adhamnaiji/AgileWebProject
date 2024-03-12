import { Injectable } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { agents_list } from '../../data';
import { HttpClient } from '@angular/common/http';
import { user } from '../../app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {


  private usersUrl: string;

  constructor(private http:HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }

  public findAll(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl);
  }


  users!:any;

  getAllAgents():Agent[]{
    return agents_list;
  }

  getAllAgentBySearch(searchterm:string){
    return this.getAllAgents().filter(agent => agent.name.toLowerCase().includes(searchterm.toLowerCase()));
  }


loginUser(thisuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/login",thisuser);
}


signupUser(thisformuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/signup",thisformuser);

}
  


}
