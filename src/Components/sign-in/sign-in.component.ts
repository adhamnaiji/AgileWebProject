import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
import {RouterModule} from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../services/agent.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent  implements OnInit{

  postuserform!: FormGroup;
  constructor(private agentservice:AgentService,
    private fb:FormBuilder){}



  ngOnInit(): void {
    this.postuserform=this.fb.group({
      email:[null,[Validators.required]],
      mdp:[null,[Validators.required]]
    })
  }

  @Input() type ! :String;
  @Input() placeholder ! :String;
  @Input() id !:String;

  postuser(){
    //console.log(this.postuserform.value);
    this.agentservice.loginUser(this.postuserform.value).subscribe((res)=>{
        console.log(res);

      
    })



    

  }




}
