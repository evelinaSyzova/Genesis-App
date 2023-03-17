import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input()
  course: Course;
  isHover = false;

  onOver(){
    this.isHover = true;
    console.log('sdfghjkl;lkjhgfd');
  }

  onOut(){
    this.isHover = false;
  }
}
