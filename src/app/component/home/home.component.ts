import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { FooterModule } from './footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = "Nicolas";
  

  teste() {
    console.log("oi")
  }

}