import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdGridListModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    FlexLayoutModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    FlexLayoutModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ]
})
//Important to be exportable
export class MaterialModule { }
