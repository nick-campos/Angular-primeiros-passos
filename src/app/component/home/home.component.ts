import { Component, signal } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { FooterModule } from './footer/footer.module';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name = signal("Nicolas");
  count = 0;
  value = false;
  
  lista = []

  constructor(private service: HelloWorldService) {
    this.service.getHelloWorld().subscribe(
      {
        next: (data) => {
          console.log(data)
        }, 
        error: (error) => {
          console.log(error)
        }, 
        complete: () => {
          console.log("Finalizou")
        }
      }
    )
  }  


  teste() {
    this.count += 1;
  }
}