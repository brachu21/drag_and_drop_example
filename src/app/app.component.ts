import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface Transport {
  title: string;
  isTravelTime: boolean;
}

let count = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'draganddrop';

  TRANSPORTS: Transport[] = [];

  TRAVELTIMES: Transport[] = [];

  drop(event: CdkDragDrop<Transport[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      count += 1;
      this.TRANSPORTS.splice(event.currentIndex, 0, {title: 'TRAVEL TIME ' + count, isTravelTime: true});
      console.log(this.TRANSPORTS);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      const t = {} as Transport;
      t.title = 'transport nr: ' + i;
      t.isTravelTime = false;
      this.TRANSPORTS.push(t);
    }
  }

  noReturnPredicate() {
    return false;
  }
}
