import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css'],
})
export class ComponenteHijoComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  agregarNuevoElemento(value: string) {
    this.newItemEvent.emit(value);
  }
}
