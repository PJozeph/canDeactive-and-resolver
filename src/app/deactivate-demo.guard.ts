import { CanDeactivateFn } from '@angular/router';
// import { FooComponent } from './foo/foo.component';

export const deactivateDemoGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  console.log('Deactivate guard called');
  console.log(component.canDeactivate())
  return component.kismacska();
};
