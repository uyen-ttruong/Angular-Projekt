import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { 
    
  
      }
  myFunction(){
    window.alert('Vielen Dank für Ihre Bestellung. Sobald Ihre Bestellung auf dem Weg zu Ihnnen ist, erhälten Sie von uns eine Versandbestätigung per Mail.');
  }
  

  ngOnInit() {
    
  }

}
