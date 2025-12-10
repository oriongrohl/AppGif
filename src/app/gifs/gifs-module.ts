import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page';
import { SearchBoxComponents } from './components/search-box/search-box';
import { CardListComponents } from './components/card-list/card-list';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponents,
    CardListComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [ HomePageComponent ]
})
export class GifsModule { }
