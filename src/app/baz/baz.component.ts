import { Component, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrl: './baz.component.scss',
})
export class BazComponent implements OnInit {
  empty = true;
  formBuilder: FormBuilder = inject(FormBuilder);
  formGroup: FormGroup = this.formBuilder.nonNullable.group({
    input: [''],
  });

  private router: Router = inject(Router);
  ngOnInit(): void {
    this.formGroup.get('input')?.valueChanges.subscribe((value) => {
      console.log('input value changed', value);
      this.empty = value.length === 0;
    });
  }

  kismacska() {
    return this.empty;
  }

  navigateToFoo() {
    this.router.navigate(['foo']);
  }
}
