import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html'
})
export class Tab1Page {

  private listas: List[] = [];

  constructor(
    public service: WishesService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.getAllList();
  }

  public getAllList() {
    this.listas = this.service.lista;
  }

  public async addList() {

    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'tittle',
          type: 'text',
          placeholder: 'Name of list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar')
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.tittle.length === 0) {
              return;
            }

            const id = this.service.createList(data.tittle);

            this.router.navigateByUrl(`/tabs/tab1/add/${id}`);
          }
        }
      ]
    });

    alert.present();
  }

  selectList(lista: List) {
    this.router.navigateByUrl(`/tabs/tab1/add/${lista.id}`);
  }
}
