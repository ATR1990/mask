import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  maskForm!: FormGroup;

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.maskForm = this.fb.group({
      iin: [null]
    })
  }

}
