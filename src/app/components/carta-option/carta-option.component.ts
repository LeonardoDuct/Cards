import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta-option',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carta-option.component.html',
  styleUrl: './carta-option.component.css'
})
export class CartaOptionComponent {
  @Input({
    required: true,
  })
  public caracter!: String[];

  @Output()
  public caracterSelecionado: EventEmitter<String> = new EventEmitter();

  public selecionarCaracter(caracter: String) {
     this.caracterSelecionado.emit(caracter);
  }
}
