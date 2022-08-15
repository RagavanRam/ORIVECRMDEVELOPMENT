import { Directive, HostListener } from '@angular/core';

interface FsDocument extends Document {
  mozFullScreen?: boolean;
  webkitIsFullScreen?: boolean;
}

@Directive({
  selector: '[appFullScreen]'
})
export class FullScreenDirective {

  constructor() { }

  private cancelFullScreen (element: any) {
    var requestMethod = element.cancelFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.exitFullscreen;
    if (requestMethod) {
      requestMethod.call(element);
    }
  }

  private requestFullScreen (element: any) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
    if (requestMethod) {
      requestMethod.call(element);
    }
  }

  @HostListener('click', ['$event'])
  toggleFullScreen() {
    var element = document.body;
    var fsDoc = <FsDocument>document;
    var isInFullScreen = (fsDoc['fullscreenElement'] && fsDoc['fullscreenElement'] != null) || (fsDoc['mozFullScreen'] || fsDoc['webkitIsFullScreen']);

    if (isInFullScreen) {
      this.cancelFullScreen(document);
    }else {
      this.requestFullScreen(element);
    }

    return false;
  }

}
