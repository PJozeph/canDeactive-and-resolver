import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const resolverDemoResolver: ResolveFn<any> = (route, state) => {
  const httpClinet = inject(HttpClient);
  return httpClinet.get('https://jsonplaceholder.typicode.com/todos/1');
};
