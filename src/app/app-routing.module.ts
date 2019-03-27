import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pre-game', loadChildren: './pre-game/pre-game.module#PreGamePageModule' },
  { path: 'post-game-modal', loadChildren: './post-game-modal/post-game-modal.module#PostGameModalPageModule' },
  { path: 'post-game-modal2', loadChildren: './post-game-modal2/post-game-modal2.module#PostGameModal2PageModule' },
  { path: 'post-game-modal-tie', loadChildren: './post-game-modal-tie/post-game-modal-tie.module#PostGameModalTiePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
