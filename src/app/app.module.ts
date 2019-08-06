import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { HttpClientModule } from "@angular/common/http";
import { SideCTAComponent } from './side-cta/side-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemlistComponent,
    SideCTAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
