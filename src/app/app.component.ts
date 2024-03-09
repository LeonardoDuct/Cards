import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartaOptionComponent } from './components/carta-option/carta-option.component';
import { CartaComponent } from './components/carta/carta.component';
import { Carta } from './models/carta';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CartaOptionComponent,
    CartaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public Carta: Carta = new Carta()
  public Naipes: String [] =[
    '♠️', '♥️', '♣️','♦️'
  ]
  public Letras: String[] = [
    'Q', 'J', 'K'
  ]
  public Numeros: String[] = [
    'A', '2', '3','4', '5', '6', '7', '8', '9','10'
  ]
}
