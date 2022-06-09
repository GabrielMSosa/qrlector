import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-qrlector',
  templateUrl: './qrlector.component.html',
  styleUrls: ['./qrlector.component.css']
})
export class QrlectorComponent implements OnInit {
torch:boolean=false;

  qrinfo:string="";
  scannerEnabled: boolean = true;
  
  private information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]
  constructor() { 
    
  }

  ngOnInit(): void {
    
    
  }
  enableTorch(){
this.torch=!this.torch;


  }
  scanSuccessHandler(e:any): void {
    this.qrinfo=e.toString();
    console.log(e);
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

}
