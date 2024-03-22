import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BazComponent } from './baz/baz.component';
import { deactivateDemoGuard } from './deactivate-demo.guard';
import { resolverDemoResolver } from './resolver-demo.resolver';

const routes: Routes = [
  {
    path: 'foo',
    resolve: {
      foo: resolverDemoResolver,
    },
    component: FooComponent,
  },
  {
    path: 'baz',
    component: BazComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
