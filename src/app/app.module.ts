import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { AppComponent } from './app.component';
import { QrlectorComponent } from './components/qrlector/qrlector.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { MatMenuModule } from '@angular/material/menu';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule, Routes} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { QrcodeendComponent } from './components/qrcodeend/qrcodeend.component';
const routes: Routes = [{path:'qrlector',component:QrlectorComponent},
                        {path:'qrlectorend',component:QrcodeendComponent},
                         {path:'home',component:NavheaderComponent},
                         {path:'',redirectTo:'home',pathMatch:'full' }];



@NgModule({
  declarations: [
    AppComponent,
    QrlectorComponent,
    NavheaderComponent,
    QrcodeendComponent
    
  ],
  imports: [
    BrowserModule,
    NgxScannerQrcodeModule,
    MatGridListModule,
    ZXingScannerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatBadgeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
