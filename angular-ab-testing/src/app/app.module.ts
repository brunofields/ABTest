import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './core/components/pages.module';
import { RandomizedTestingService } from './core/services/randomized-testing.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [RandomizedTestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
