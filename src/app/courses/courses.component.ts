import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Course } from '../models/course';
import { CourseService } from '../servises/course.service';
import { merge, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  allCourses: Course[];
  pagedCourses: Course[];
  breakpoint: number = 2;
  length: number;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getCourses().subscribe((response) => {
      this.allCourses = response.courses;
      this.pagedCourses = this.paginate(0,10);
      this.length = this.allCourses.length;
    });
  }

  handlePageEvent(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.pagedCourses = this.paginate(startIndex, endIndex);
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 800 ? 1 : 2;
  }
  paginate(startIndex: number, endIndex: number): Course[] {
    if (endIndex > this.allCourses.length) {
      endIndex = this.allCourses.length;
    }
    return this.allCourses.slice(startIndex, endIndex);
  }
}
