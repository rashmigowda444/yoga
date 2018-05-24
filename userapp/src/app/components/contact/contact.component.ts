import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { PhpService } from '../../services/php.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private phpService: PhpService,
    private router: Router) { }

  ngOnInit() {
  }

  model = {
    name: String,
    phone: String,
    email: String,
    subject: String,
    comment: String
  }
  onSubmit(){
    this.phpService
      .onSubmit(this.model)
      .subscribe(()=> this.goBack());
}
 goBack(){
  this.router.navigate(['/contact']);
}
}
