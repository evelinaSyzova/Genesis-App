import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../servises/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  course: Course;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private courseService: CourseService){}

  ngOnInit(): void {
    let courseId = this.activatedRoute.snapshot.paramMap.get('courseId');
    if (courseId){
      this.getCourse(courseId);
    }
  }

  getCourse(courseId:string){
    this.courseService.getCourse(courseId).subscribe(res => {
        this.course = res;
      });
  }
}
