import { Component, signal } from '@angular/core';
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

  name = signal("Nicolas");
  cont = 0;
  

  teste() {
    this.cont += 1;
  }

}