import {Component, OnInit} from '@angular/core';
import {PopupService} from './services/popup.service';
import {SignInComponent} from './components/signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private popup: PopupService) { }

  title = 'app';

  ngOnInit() {
    this.popup.open(SignInComponent);
  }

}
