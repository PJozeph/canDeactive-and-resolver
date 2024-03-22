import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnDestroy, OnInit {
  touched = true;
  
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  
  kismacska() {
    return this.touched;
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log('Data from resolver', data);
    });
  }

  navigateToBaz() {
    this.router.navigate(['baz']);
  }
  ngOnDestroy(): void {
    console.log('FooComponent destroyed');
  }
}
