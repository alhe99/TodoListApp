import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  @ViewChild(IonList, { static: true }) lista: IonList;
  @Input() terminado = true;

  public listas: List[] = [];
  constructor(
    private service: WishesService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.getAllList();
  }

  ngOnInit() { }

  public getAllList() {
    this.listas = this.service.lista;
  }

  public selectList(lista: List) {
    this.router.navigateByUrl(`/tabs/tab${this.terminado ? '2' : '1'}/add/${lista.id}`);
  }

  public deleteList(lista: List) {
    this.service.deleteList(lista);
  }

  public async editList(lista: List) {
    const alert = await this.alertController.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'tittle',
          type: 'text',
          value: lista.tittle,
          placeholder: 'Name of list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: (data) => {
            if (data.tittle.length === 0) {
              return;
            }
            lista.tittle = data.tittle;
            this.service.saveStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
