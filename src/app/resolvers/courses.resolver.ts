import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Course } from '../models/course';
import { CourseService } from '../servises/course.service';

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<Course[]> {
  constructor(private service: CourseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course[]> | Promise<Course[]> | Course[] {
    return this.service.getCourses().pipe(map(res => res.courses));
  }
}
