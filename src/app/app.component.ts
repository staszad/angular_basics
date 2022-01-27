import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Title - from property';
  title1 = 'Empty field';
  dog = {
    nickname: 'reksio',
  };
  getInfo() {
    return 'Yout info - from method';
  }

  get message() {
    return "Message for you - from 'get'";
  }

  get number() {
    return Math.floor(Math.random() * 15);
  }

  numToCheck: number = 0;
  isDividable(num: number, divisor: number) {
    return !(num % divisor);
  }
}
