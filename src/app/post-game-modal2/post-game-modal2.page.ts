import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-game-modal2',
  templateUrl: './post-game-modal2.page.html',
  styleUrls: ['./post-game-modal2.page.scss'],
})
export class PostGameModal2Page implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
