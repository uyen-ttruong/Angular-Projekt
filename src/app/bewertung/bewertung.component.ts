import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bewertung',
  templateUrl: './bewertung.component.html',
  styleUrls: ['./bewertung.component.css']
})
export class BewertungComponent implements OnInit {


  constructor() {
   
   }
  be(){
    window.alert('Vielen Dank für Ihre Bewertung')
  

  }

  ngOnInit() {
  }

}

