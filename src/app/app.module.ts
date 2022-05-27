import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { AppComponent } from './app.component';
import { QrlectorComponent } from './components/qrlector/qrlector.component';

@NgModule({
  declarations: [
    AppComponent,
    QrlectorComponent
  ],
  imports: [
    BrowserModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
