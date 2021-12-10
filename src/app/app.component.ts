import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lista: string[] = [];
  agregarElemento(nuevoElemento: string) {
    this.lista.push(nuevoElemento);
  }
  checkList = (): boolean => (this.lista.length > 0 ? true : false);
}
