import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogModule } from './catalog/catalog.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CatalogThumbsComponent } from './catalog/catalog-thumbs/catalog-thumbs.component';

  
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'catalog', component: CatalogThumbsComponent },

  //Supposed to be last for errors - ORDER MATTER
  { path: '**', component: NotFoundComponent },
];

  //needed to inherit the main route from the uri
export const routing = RouterModule.forRoot(routes);