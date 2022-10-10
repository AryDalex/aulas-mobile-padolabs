import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NortePageRoutingModule } from './norte-routing.module';

import { NortePage } from './norte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NortePageRoutingModule
  ],
  declarations: [NortePage]
})
export class NortePageModule {}
