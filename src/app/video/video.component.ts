import {
  AfterViewInit,
  Attribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements AfterViewInit {
  @Input()
  poster: string;
  @Input()
  videoUrl: string;
  @Input()
  startTime: number = 0;
  @Output()
  currentTime = new EventEmitter<number>();
  @ViewChild('video')
  video: ElementRef<HTMLVideoElement>;
  private hls: Hls;
  playbackRate: number = 1;

  constructor(
    @Attribute('autoplay') public autoplay: boolean = false,
    @Attribute('muted') public muted: boolean = false,
    @Attribute('controls') public controls: boolean = true
  ) {}

  ngAfterViewInit(): void {
    this.video.nativeElement.currentTime = this.startTime;
    this.hls = new Hls();
    this.hls.loadSource(this.videoUrl);
    this.hls.attachMedia(this.video.nativeElement);
  }

  updateTime() {
    this.currentTime.emit(this.video.nativeElement.currentTime);
  }
  
  @HostListener('window:keydown', ['$event'])
  changePlaybackRate(event: KeyboardEvent) {
    if (event.key === '<') {
      this.playbackRate -= 0.25;
    } else if (event.key === '>') {
      this.playbackRate += 0.25;
    }
    this.video.nativeElement.playbackRate = this.playbackRate;
  }
}
