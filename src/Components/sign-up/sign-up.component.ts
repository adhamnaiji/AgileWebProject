import { Component, Input } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  @Input() type ! :String;
  @Input() placeholder  :String="";
  @Input() id !:String;

}
