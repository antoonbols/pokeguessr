import { NgModule } from '@angular/core';
import { RedBlueGuessrComponent } from './components/redblueguessr/redblueguessr.component';
import { RedBlueMapComponent } from './components/redbluemap/redbluemap.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RedBlueGuessrComponent,
    RedBlueMapComponent
  ],
  imports: [CommonModule],
  exports: [
    RedBlueGuessrComponent
  ]
})
export class RedBlueModule {}
