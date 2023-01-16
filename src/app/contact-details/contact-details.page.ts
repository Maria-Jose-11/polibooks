import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit, OnDestroy {

  public contact: Contact;
  handlerMessage = '';
  roleMessage = '';
  

  sub1: Subscription;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub1 = this.dataService.getContactById(id)
    .subscribe(contact => {
      // if the contact doesn't exists, return to home page
      if (!contact) {
        this.router.navigate(['/home']);
      } else {
        this.contact = contact;
      }
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  deleteContact(contactId: string) {
    this.dataService.deleteContact(contactId)
    .then(
      res => this.router.navigate(['/home'])
    );
  }

  async presentAlert(contactId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '',
      message: '¿Esta seguro que desea eliminar la información?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Eliminando datos... ';

            this.dataService.deleteContact(contactId)
            .then(
              res => this.router.navigate(['/home'])
            );
          },
        },
      ],
    });

    await alert.present();
  }

}
