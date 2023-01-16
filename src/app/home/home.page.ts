import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Contact } from '../models/contact';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { NewContactPage } from '../new-contact/new-contact.page';
import { Observable } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { Router } from '@angular/router';
import { IonicRatingModule } from 'ionic-rating';

// @NgModule({

//   imports:[
//     IonicRatingModule
//   ]
// })

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage  {
  public contacts: Observable<Contact[]>;
  profile = null;
  user = '';
  email = '';
  currentRate = 5;
  @Input() rating: number ;
  color = '';
  numero=0;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private ionicRating:IonicRatingModule,
  ) {
    this.contacts = this.dataService.getContacts();
  }

  ngOnInit(){
    this.user = this.authService.currentUser.email;
  }

  rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating)
    // function used to change the value of our rating 
    // triggered when user, clicks a star to change the rating
 }

 getColor(index: number) {
  if(this.isAboveRating(index)){
    return this.color='#00000';
  }
  /* function to return the color of a star based on what
   index it is. All stars greater than the index are assigned
   a grey color , while those equal or less than the rating are
   assigned a color depending on the rating. Using the following criteria:
  
        1-2 stars: red
        3 stars  : yellow
        4-5 stars: green 
  */
}

isAboveRating(index: number): boolean {
  return index > this.rating;
  // returns whether or not the selected index is above ,the current rating
  // function is called from the getColor function.
}


  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: NewContactPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
