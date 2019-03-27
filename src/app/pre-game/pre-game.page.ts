import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PostGameModalPage } from '../post-game-modal/post-game-modal.page';
import { PostGameModal2Page } from '../post-game-modal2/post-game-modal2.page';
import { PostGameModalTiePage } from '../post-game-modal-tie/post-game-modal-tie.page';


@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.page.html',
  styleUrls: ['./pre-game.page.scss'],
})
export class PreGamePage implements OnInit {

  winners = new Array();
  player1Selections = new Array();
  player2Selections = new Array();
  currentPlayer = 0;
  selected = new Array();
  turns = 0;
  
  constructor(public alertController: AlertController, public modalController: ModalController) { }

  ngOnInit() {
      this.winners.push([0, 1, 2]);
      this.winners.push([3, 4, 5]);
      this.winners.push([6, 7, 8]);
      this.winners.push([0, 3, 6]);
      this.winners.push([1, 4, 7]);
      this.winners.push([2, 5, 8]);
      this.winners.push([0, 4, 8]);
      this.winners.push([2, 4, 6]);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
      this.selected.push(0);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostGameModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal2 = await this.modalController.create({
      component: PostGameModal2Page,
      componentProps: { value: 123 }
    });
    return await modal2.present();
  }

  async presentModalTie() {
    const modal3 = await this.modalController.create({
      component: PostGameModalTiePage,
      componentProps: { value: 123 }
    });
    return await modal3.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Choose different space',
      message: 'You cannot go here, it is already taken.',
      buttons: ['OK']
    });
    await alert.present();
  }

  public select() {
    if(this.currentPlayer == 0 && this.selected[event.srcElement.id] == 0) {
      this.player1Selections.push(event.srcElement.id);
      var loading = document.getElementById(event.srcElement.id + "0") ;
      loading.style.visibility = "visible" ;
      this.selected[event.srcElement.id] = 1;
      this.turns++;
        this.checkWinner();
        this.currentPlayer++;
        console.log(this.turns);
    } else if(this.currentPlayer == 1 && this.selected[event.srcElement.id] == 0) {
        this.player2Selections.push(event.srcElement.id);
        var loading = document.getElementById(event.srcElement.id + "1") ;
        loading.style.visibility = "visible" ;
        this.selected[event.srcElement.id] = 1;
        this.turns++;
        this.checkWinner();
        this.currentPlayer--;
        console.log(this.turns);
    } else {
      this.presentAlert();
    }

    //console.log(this.player1Selections);
    //console.log(this.player2Selections);
    //console.log(this.selected);
  
  }

  checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var found = new Array(3);
    var playerSelections = new Array();
    var tie = "tie";

    if (this.currentPlayer == 0) {
        playerSelections = this.player1Selections;
    } else {
        playerSelections = this.player2Selections;
    }
        
        for (var i = 0; i < this.winners.length; i++) {
            var sets = this.winners[i];

            
            for(var r = 0; r < sets.length; r++) {
              for(var x = 0; x < playerSelections.length; x++) {
                if(sets[r]==playerSelections[x]) {
                  found[r] = true;
                  break;
                } else {
                  found[r] = false;
                }
              }
            }
            //console.log(found);
            if(found[0] == true && found[1] == true && found[2] == true) {
              win = true;
              break;
            } 
      }
      if(win == true && this.currentPlayer == 0) {
      console.log(win);
      this.currentPlayer = -1;
      this.presentModal();
      this.reset();

      } else if(win == true && this.currentPlayer == 1) {
        console.log(win);
        this.presentModal2();
        this.reset();
      } else if(win == false && this.turns == 9) {
        console.log(tie);
        console.log(this.turns);
        this.reset();
        this.presentModalTie();
        this.currentPlayer = -1;
      }
}

reset() {
      this.player1Selections = new Array();
      this.player2Selections = new Array();
      this.turns = 0;
      
      for(var i = 0; i <= 8; i++) {
        this.selected[i] = 0;
        var loading = document.getElementById(i + "1") ;
        var loading2 = document.getElementById(i + "0") ;
        loading.style.visibility = "hidden" ;
        loading2.style.visibility = "hidden" ;
      }
}
}
