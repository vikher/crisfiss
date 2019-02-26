import { Component, OnInit,NgZone , ViewChild, ViewContainerRef, TemplateRef , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { Career } from '../../models/career.model';
import { CareerService } from '../../services/career.service'
import { Router } from '@angular/router';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {

  @ViewChild("outlet", {read: ViewContainerRef}) outletRef: ViewContainerRef;
  @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;

  public _id;
  preload:string = 'auto';
  api:VgAPI;
  course: Course;
  constructor(private _route: ActivatedRoute,
    private _careerService: CareerService,
    private _router: Router,
    private zone:NgZone) { }

  ngAfterContentInit() {
    this.outletRef.createEmbeddedView(this.contentRef);
  }

  private rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  }
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.course = this._careerService.getCourse(this._id);
    });
  }


  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
        this.playVideo.bind(this)
    );
}
playVideo() {
  this.api.getDefaultMedia();
}

  getNextVideo() {
    switch (this.course.careerId) {
      case 1: {
        if (this._id < 4) {
          this._id = this._id + 1;
        } else {
          this._id = 1;
        }
        this._router.navigate(['/courses', this._id]);
        break;
      }
      case 2: {
        if (this._id < 9) {
          this._id = this._id + 1;
        } else {
          this._id = 5;
        }
        this._router.navigate(['/courses', this._id]);
        break;
      }
      case 3: {
        if (this._id < 13) {
          this._id = this._id + 1;
        } else {
          this._id = 10;
        }
        this._router.navigate(['/courses', this._id]);
        break;
      }
      case 4: {
        if (this._id < 17) {
          this._id = this._id + 1;
        } else {
          this._id = 14;
        }
        this._router.navigate(['/courses', this._id]);
        break;
      }
      case 5: {
        if (this._id < 21) {
          this._id = this._id + 1;
        } else {
          this._id = 18;
        }
        this._router.navigate(['/courses', this._id]);
        break;
      }
      default: {
        console.log("Invalid course choice");
        break;
      }
    }
    this.rerender()
  }
}


