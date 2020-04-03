import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListItems } from '../../models/list.item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
})
export class AddPage implements OnInit {

  lista: List;
  item: string = '';

  constructor(
    private service: WishesService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('listId');
    this.lista = this.service.getList(id);


  }

  ngOnInit() {
  }

  addItem() {
    if (this.item.length === 0) {
      return;
    }

    const newItem = new ListItems(this.item);
    this.lista.items.push(newItem);

    this.item = '';

    this.service.saveStorage();
  }

  changeStatus(item: ListItems) {

    const pendientes = this.lista.items
      .filter(data => !data.complete)
      .length;

    if (pendientes === 0) {
      this.lista.endedAt = new Date();
      this.lista.complete = true;
    } else {
      this.lista.endedAt = null;
      this.lista.complete = false;
    }

    this.service.saveStorage();
  }

  deleteItem(index: number) {
    this.lista.items.splice(index, 1);
    this.service.saveStorage();
  }
}
