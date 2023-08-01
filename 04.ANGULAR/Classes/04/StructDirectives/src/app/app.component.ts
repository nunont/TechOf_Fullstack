import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'StructDirectives';

  cars = [
    {
      brand : 'Ford',
      topCar: 'GT',
      maxSpeed: 347
    },
    {
      brand : 'Ferrari',
      topCar: 'LaFerrari',
      maxSpeed: 349
    },
    {
      brand : 'Lamborghini',
      topCar: 'Aventador',
      maxSpeed: 350
    },
    {
      brand : 'Bugatti',
      topCar: 'Chiron',
      maxSpeed: 420
    },
    {
      brand : 'Koenigsegg',
      topCar: 'Agera RS',
      maxSpeed: 447
    },
    {
      brand : 'Hennessey',
      topCar: 'Venom GT',
      maxSpeed: 435
    }
  ]
}
