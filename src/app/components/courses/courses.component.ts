import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Course } from '../../models/course';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ courses }) => {
      this.allCourses = courses;
      this.pagedCourses = this.paginate(0, 10);
      this.length = this.allCourses.length;
    });
  }

  handlePageEvent(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this.pagedCourses = this.paginate(startIndex, endIndex);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 1200 ? 1 : 2;
  }

  paginate(startIndex: number, endIndex: number): Course[] {
    if (endIndex > this.allCourses.length) {
      endIndex = this.allCourses.length;
    }
    return this.allCourses.slice(startIndex, endIndex);
  }
}