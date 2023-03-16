import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of courses', () => {
    const mockResponse = { courses: [{ id: 1, title: 'Course 1' }, { id: 2, title: 'Course 2' }] };

    // service.getCourses().subscribe((courses: Course[]) => {
    //   expect(courses.length).toBe(2);
    //   expect(courses[0].title).toEqual('Course 1');
    //   expect(courses[1].id).toEqual(2);
    // });

    const req = httpMock.expectOne(`${environment.host}/${environment.version}/core/preview-courses`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should retrieve a single course by id', () => {
    const mockCourse = { id: 1, title: 'Course 1' };

    // service.getCourse('1').subscribe((course: Course) => {
    //   expect(course).toEqual(mockCourse);
    // });

    const req = httpMock.expectOne(`${environment.host}/${environment.version}/core/preview-courses/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourse);
  });
});