import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LondrinaPageRoutingModule } from './londrina-routing.module';

import { LondrinaPage } from './londrina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LondrinaPageRoutingModule
  ],
  declarations: [LondrinaPage]
})
export class LondrinaPageModule {}
