import { Component, Input } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
@Component({
  selector: 'app-reset-paswword',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './reset-paswword.component.html',
  styleUrl: './reset-paswword.component.css'
})
export class ResetPaswwordComponent {

  @Input() type ! :String;
  @Input() placeholder ! :String;
  @Input() id !:String;

}
