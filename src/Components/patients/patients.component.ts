import { Component } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { user } from '../../app/user';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,SearchComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent {

  users: user[] = [];

  constructor(private agentService: AgentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const searchterm = params['searchterm'];
      if (searchterm) {
        this.agentService.getAllUsersBySearch(searchterm).subscribe(
          (users: user[]) => {
            this.users = users;
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
      } else {
        this.agentService.getAllusers().subscribe(
          (users: user[]) => {
            this.users = users;
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
      }
    });
  }
  }


