import { Directive, Input, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Directive({
  selector: '[routeTo]'
})
export class RouteToDirective {

  @Input() routeTo:string;

  @HostListener('click') onClick () {
    if(this.routeTo === "back") {
      this._location.back();
    } else {
      this.router.navigate([this.routeTo]);
    }
  }
  constructor(
    private router:Router,
    private _location: Location
  ) {
    
  }

}
