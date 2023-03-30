import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app-lista-de-compras';

  listaDeCompra! : Array<Item>

  constructor(private listaService: ListaDeCompraService) {
  }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompra);

  }

}
