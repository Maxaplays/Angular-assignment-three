import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-three';
  btnFlag = true;
  numberArr = [];
  onToggleBtn() {
    if (this.btnFlag === true) {
      this.btnFlag = false;
    } else {
      this.btnFlag = true;
    }
  }
  onAddNewArr() {
    // this.numberArr.push(this.numberArr.length + 1);
    this.numberArr.push(new Date());
  }
}
