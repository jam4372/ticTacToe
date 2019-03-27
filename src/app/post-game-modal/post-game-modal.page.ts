import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-game-modal',
  templateUrl: './post-game-modal.page.html',
  styleUrls: ['./post-game-modal.page.scss'],
})
export class PostGameModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  // close win state modal
  dismiss() {
    this.modalController.dismiss();
  }

}
