import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() { }
  re(){
    window.alert('Vielen Dank für Ihren Reservierungswunsch. Wir kümmern uns so rasch wie möglich darum. Falls wir noch Fragen haben, rufen wir Sie an, ansonsten bekommen Sie eine Bestätigung per E-Mail.Bis bald, wir freuen uns auf Sie! ')
  

  }
  ngOnInit() {
  }

}
