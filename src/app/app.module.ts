import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/signin/signin.component';
import { PopupService } from './services/popup.service';

@NgModule({
  declarations: [AppComponent, SignInComponent],
  imports: [BrowserModule],
  providers: [PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
