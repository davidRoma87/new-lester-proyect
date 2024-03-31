import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThanksComponentComponent } from './components/thanks-component/thanks-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ThanksComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
