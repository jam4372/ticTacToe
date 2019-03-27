import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-game-modal-tie',
  templateUrl: './post-game-modal-tie.page.html',
  styleUrls: ['./post-game-modal-tie.page.scss'],
})
export class PostGameModalTiePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
