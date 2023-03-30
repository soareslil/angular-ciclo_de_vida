import { Item } from './../../interfaces/iItem';
import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

}
