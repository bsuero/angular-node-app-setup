import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: []
})
export class AppComponent {
  message = 'angular-app';

  constructor(private apiService: ApiService) {
    // this.apiService.getTestMessage().subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit() {
    this.apiService.getTestMessage().subscribe(response => {
      this.message = response.message;
    });
  }
}