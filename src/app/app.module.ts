import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.route';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ClientComponent } from './client/client.component';
import { VisitComponent } from './visit/visit.component';
import { CallComponent } from './call/call.component';
import {ClientService} from './services/client.service';
import {CallService} from './services/call.service';
import {VisitService} from './services/visit.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    VisitComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClientService,
    CallService,
    VisitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
