import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { Career } from '../../models/career.model';
import { CareerService } from '../../services/career.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  constructor(private _route: ActivatedRoute,
    private _careerService: CareerService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.course = this._careerService.getCourse(id);
  }

}
