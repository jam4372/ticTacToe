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

  // array to store winning ID combinations
  winners = new Array();
  // player selection arrays
  player1Selections = new Array();
  player2Selections = new Array();
  // track current players
  currentPlayer = 0;
  // track selected board cells
  selected = new Array();
  // track the amount of turns taken
  turns = 0;
  
  constructor(public alertController: AlertController, public modalController: ModalController) { }

  // populate winning combinations array on load
  // initialize selected array as 0
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

  // modal for player1 win event
  async presentModal() {
    const modal = await this.modalController.create({
      component: PostGameModalPage,
    });
    return await modal.present();
  }

  // modal for player2 win event
  async presentModal2() {
    const modal2 = await this.modalController.create({
      component: PostGameModal2Page,
    });
    return await modal2.present();
  }

  // modal for tie event
  async presentModalTie() {
    const modal3 = await this.modalController.create({
      component: PostGameModalTiePage,
    });
    return await modal3.present();
  }

  // alert for selecting cell already taken
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Choose different space',
      message: 'You cannot go here, it is already taken.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // select board ID's based on currentPlayer 
  // set selected ID's corresponding svg for currentPlayer to visible
  // increment turn for checking tie state and move to next players turn
  // store each players selected ID's to track winner
  public select() {
    // check for player one and assure selection hasn't already been used
    if(this.currentPlayer == 0 && this.selected[event.srcElement.id] == 0) {
      // push selection to player1Selections array
      this.player1Selections.push(event.srcElement.id);
      // set selection to visible by corresponding ID
      var loading = document.getElementById(event.srcElement.id + "0") ;
      loading.style.visibility = "visible";
      // set selection as taken in selected array by ID
      this.selected[event.srcElement.id] = 1;
      this.turns++;
      // check for enough selections to win 
      // if true run check for winner
      if (this.player1Selections.length >= 3) {
      this.checkWinner();
      }
      // change turn to player two
      this.currentPlayer++;
      //console.log(this.turns);

      // check for player two and assure selection hasn't already been used
    } else if(this.currentPlayer == 1 && this.selected[event.srcElement.id] == 0) {
        // push selection to player2Selections array
        this.player2Selections.push(event.srcElement.id);
        // set selection to visible by corresponding ID
        var loading = document.getElementById(event.srcElement.id + "1") ;
        loading.style.visibility = "visible";
        // set selection as taken in selected array by ID
        this.selected[event.srcElement.id] = 1;
        this.turns++;
        // check for enough selections to win 
        // if true run check for winner
        if (this.player2Selections.length >= 3) {
        this.checkWinner();
        }
        // change turn to player two
        this.currentPlayer--;
        //console.log(this.turns);

      // alert for taken selection 
    } else {
      this.presentAlert();
    }

    //console.log(this.player1Selections);
    //console.log(this.player2Selections);
    //console.log(this.selected);
  
  }

  checkWinner() {
    // check if current player has a winning hand
    var win = false; 
    var found = new Array(3);
    var playerSelections = new Array();

    // determine currentPlayer to check selections for
    if (this.currentPlayer == 0) {
        playerSelections = this.player1Selections;
    } else {
        playerSelections = this.player2Selections;
    }
        // create sets of winning selection ID's and loop through
        for (var i = 0; i < this.winners.length; i++) {
            var sets = this.winners[i];

              // loop through playerSelections checking for full three matches to sets
              // found array needs all instances to be true to win
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

            // check found for win state of three matches
            if(found[0] == true && found[1] == true && found[2] == true) {
              win = true;
              break;
            } 
      }

      // check win state and currentPlayer to determine winner
      // on win state true present postGame modal for winning player
      // reset board and variables
      if(win == true && this.currentPlayer == 0) {
      //console.log(win);
      this.currentPlayer = -1;
      this.presentModal();
      this.reset();

      } else if(win == true && this.currentPlayer == 1) {
        //console.log(win);
        this.presentModal2();
        this.reset();

        // check for tie after turns exhausted with no full matches
        // present tieModal and reset board and variables
      } else if(win == false && this.turns == 9) {
        //console.log(tie);
        //console.log(this.turns);
        this.presentModalTie();
        this.reset();
        this.currentPlayer = -1;
      }
}

// reset board and all related variables
reset() {
      // reinitialize player selections
      this.player1Selections = new Array();
      this.player2Selections = new Array();
      this.turns = 0;
      
      // set all the X and O svg elements back to hidden to clear board.
      for(var i = 0; i <= 8; i++) {
        this.selected[i] = 0;
        var loading = document.getElementById(i + "1") ;
        var loading2 = document.getElementById(i + "0") ;
        loading.style.visibility = "hidden" ;
        loading2.style.visibility = "hidden" ;
      }
}
}
