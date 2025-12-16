import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../shared/components/search-box/search-box';
import { HomePageComponent } from './pages/home-page/home-page';
import { CardListComponent } from '../shared/components/card-list/card-list';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ HomePageComponent ]
})
export class GifsModule { }
