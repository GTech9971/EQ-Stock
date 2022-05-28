import { Component, OnInit } from '@angular/core';
import { AuthService } from './domain/services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private auth: AuthService) { }

  async ngOnInit() {
    //await this.auth.login();
  }


}
