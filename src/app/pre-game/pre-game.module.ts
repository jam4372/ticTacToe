import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreGamePage } from './pre-game.page';
import { PostGameModalPage } from '../post-game-modal/post-game-modal.page';
import { PostGameModal2Page } from '../post-game-modal2/post-game-modal2.page';
import { PostGameModalTiePage } from '../post-game-modal-tie/post-game-modal-tie.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PreGamePage
      }
    ])
  ],
  declarations: [PreGamePage, PostGameModalPage, PostGameModal2Page, PostGameModalTiePage], 
  entryComponents: [PostGameModalPage, PostGameModal2Page, PostGameModalTiePage]
})
export class PreGamePageModule {}
