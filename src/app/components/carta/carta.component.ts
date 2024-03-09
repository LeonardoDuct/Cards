import { Component, Input } from '@angular/core';
import { Carta } from '../../models/carta';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  @Input({
    required: true,
  })
  public carta: Carta = {}
}
