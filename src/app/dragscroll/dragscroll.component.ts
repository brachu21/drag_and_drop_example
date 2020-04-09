import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dragscroll',
  templateUrl: './dragscroll.component.html',
  styleUrls: ['./dragscroll.component.css', '../app.component.css']
})
export class DragscrollComponent implements OnInit {

  list: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.list.push('string ' + i);
    }
  }
}
