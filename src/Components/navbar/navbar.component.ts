import { Component } from '@angular/core';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  TestThisButton():void {
    console.log("this button works fine");
  }

}
