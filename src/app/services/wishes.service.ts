import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public lista: List[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(tittle: string) {
    const item = new List(tittle);
    this.lista.push(item);
    this.saveStorage();
    return item.id;
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lista));
  }

  loadStorage() {

    if (localStorage.getItem('data')) {
      this.lista = JSON.parse(localStorage.getItem('data'));
    }
  }

  getList(id: string | number) {
    id = Number(id);
    return this.lista.find(data => data.id === id);
  }

  deleteList(lista: List) {
    this.lista = this.lista.filter(data => data.id !== lista.id);
    this.saveStorage();
    this.loadStorage();
  }
}
