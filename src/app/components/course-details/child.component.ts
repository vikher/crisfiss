import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { CareerService } from '../../services/career.service'

let i = 0;

@Component({
  selector: 'child',
  template: `<vg-player (onPlayerReady)="onPlayerReady($event)">
  <vg-overlay-play></vg-overlay-play>
  <vg-buffering></vg-buffering>

  <vg-scrub-bar>
      <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
  </vg-scrub-bar>

  <vg-controls>
      <vg-play-pause></vg-play-pause>
      <vg-playback-button></vg-playback-button>

      <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>

      <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>

      <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
      <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>

      <vg-track-selector></vg-track-selector>
      <vg-mute></vg-mute>
      <vg-volume></vg-volume>

      <vg-fullscreen></vg-fullscreen>
  </vg-controls>

  <video [vgMedia]="media" #media id="singleVideo" preload="auto"
  type="video/mp4"
  webkit-playsinline
  playsinline
  autoplay>
      <source [src]="course.videoPath" type="video/mp4">
  </video>
</vg-player><p>This is child component nr {{count}}</p>`
})
export class ChildComponent  {
  count: number;
  course: Course;
  @Input() _id: number;

  constructor(
    private _careerService: CareerService,
) { }
  ngOnInit() {
    this.course = this._careerService.getCourse(this._id);

    this.count = i++;
    console.log("child onInit", this.count);
  }

  ngOnDestroy() {
    console.log("child onDestroy", this.count);
  }
}
