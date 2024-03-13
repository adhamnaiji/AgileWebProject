import { Injectable } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { agents_list } from '../../data';
import { HttpClient } from '@angular/common/http';
import { user } from '../../app/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  agentdet:any;


  private usersUrl: string;

  constructor(private http:HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }


  agentdetails(currentagent:any){
    this.agentdet=currentagent;
    return this.agentdet;
  }
  public findAll(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl);
  }


  users!:any;
//agents
  getAllAgents():Agent[]{
    return agents_list;
  }

  getAllAgentBySearch(searchterm:string){
    return this.getAllAgents().filter(agent => agent.name.toLowerCase().includes(searchterm.toLowerCase()));
  }


//users

  getAllusers():Observable<user[]>{
     return this.http.get<user[]>("http://localhost:8090/users");
  }

  getAllUsersBySearch(searchterm: string): Observable<user[]> {
    return this.getAllusers().pipe(
      map(users => users.filter(user => user.nom.toLowerCase().includes(searchterm.toLowerCase())))
    );
  }
  private apiUrl = 'http://localhost:8090/reset-password';

    //const url = `http://localhost:8090/reset-password/${mail}`;
    resetPassword(email: string): Observable<string> {
      const url = `${this.apiUrl}/${email}`;
      return this.http.post<string>(url, {}).pipe(
        map(response => {
          // Assuming the response is a string, you can return it directly
          console.log("res",response);
          return response;
        })
      );
    }
  


loginUser(thisuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/login",thisuser);
}


signupUser(thisformuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/signup",thisformuser);

}
  


}
