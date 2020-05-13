import { ServiceService } from './components/login/service.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

constructor(private app: ServiceService, private http: HttpClient, private router: Router) {
  
  this.app.authenticate(undefined, undefined);
}

logout() {
  this.http.post('logout', {}).pipe(finalize(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
  })).subscribe();
}

}
