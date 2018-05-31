import { Component } from '@angular/core';
import{Router,NavigationCancel,NavigationEnd,NavigationStart,NavigationError} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    loading : boolean;

    constructor(private router : Router){
        router.events.subscribe( e => {
            if (e instanceof NavigationStart) {
               this.loading = true;
            } else if (e instanceof NavigationEnd) {
               this.loading = false;
            } else if ( e instanceof NavigationCancel) {
               this.loading = false;
            } else if (e instanceof NavigationError) {
              this.loading = false;
            }
        });
    }
}
