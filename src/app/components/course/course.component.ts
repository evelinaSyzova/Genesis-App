import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { CourseProgress } from '../../models/courseProgress';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  course: Course;
  courseProgress: CourseProgress;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ course }) => {
      this.course = course;
    });
    this.loadProgress();
    this._snackBar.open(
      'You can change playback speed with "<" and ">"',
      'Close'
    );
  }

  loadProgress() {
    let loadedProgress = localStorage.getItem(this.course.id);
    if (loadedProgress) {
      this.courseProgress = JSON.parse(loadedProgress);
    } else {
      this.courseProgress = new CourseProgress(
        this.course.id,
        this.course.lessons[0].id,
        0
      );
    }
  }

  saveProgress(lessonId: string, currentTime: number = 0) {
    this.courseProgress = new CourseProgress(
      this.course.id,
      lessonId,
      currentTime
    );
    localStorage.setItem(this.course.id, JSON.stringify(this.courseProgress));
  }
}
