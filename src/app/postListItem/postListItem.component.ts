import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postListItem',
  templateUrl: './postListItem.component.html',
  styleUrls: ['./postListItem.component.scss']
})
export class postListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    this.created_at = new Date();
    this.loveIts = 0;
   }

  ngOnInit() {
  }

onPlusOne(){
  this.loveIts++;
}

onMinusOne(){
  this.loveIts--;
}

}
