import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseProgress } from 'src/app/models/courseProgress';
import { Lesson } from 'src/app/models/lesson';

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
  }

  onOut(){
    this.isHover = false;
  }
  
}
