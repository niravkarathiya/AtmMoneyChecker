import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  money = 0;
  hundredNotes = 0;
  fiftyNotes = 0;
  twentyNotes = 0;

  chekMoney() {
    this.resetNotes();
    if (this.validateAmount()) {
      alert('Enter Valid Amount as per the Note !')
    } else {
      while (this.money >= 20) {
        if (
          this.money >= 100 &&
          ((this.money % 100) % 50 === 0 || (this.money % 100) % 20 === 0)
        ) {
          this.money -= 100;
          this.hundredNotes++;
        } else if (
          this.money >= 50 &&
          ((this.money % 50) % 100 === 0 || (this.money % 50) % 20 === 0)
        ) {
          this.money -= 50;
          this.fiftyNotes++;
        } else {
          this.money -= 20;
          this.twentyNotes++;
        }
      }
    }
  }

  resetNotes() {
    this.hundredNotes = 0;
    this.fiftyNotes = 0;
    this.twentyNotes = 0;
  }

  validateAmount() {
    return (!this.money) || this.money % 10 !== 0 || this.money === 30 || this.money == 10 || (this.money >= 10000000);
  }
}
