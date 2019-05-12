import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
