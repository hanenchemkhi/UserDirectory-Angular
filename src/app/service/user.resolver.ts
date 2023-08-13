import { ResolveFn } from '@angular/router';
import { Response } from '../interface/response.interface';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const userResolver: ResolveFn<Response> = (route, state) => {
  return inject(UserService).getUser(route.paramMap.get('uuid')!);
};
