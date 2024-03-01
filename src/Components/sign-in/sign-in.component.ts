import { Component, Input } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputComponent,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Input() type ! :String;
  @Input() placeholder ! :String;
  @Input() id !:String;

}
