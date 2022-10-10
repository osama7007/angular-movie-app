import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  movieForm: FormGroup;
  constructor(private fb : FormBuilder) {
    this.movieForm = this.fb.group({
      movieName: ['' , [Validators.required , Validators.minLength(10)]],
      category: ['' , Validators.required],
    });
  }

  ngOnInit(): void {}

  get formControls(){
    return this.movieForm.controls;
  }

  handleSubmitForm(){
    console.log(this.movieForm)
  }
}
