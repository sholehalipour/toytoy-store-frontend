import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (sessionStorage.getItem('token')) {
    const token = sessionStorage.getItem('token');
    const cloned = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${ token }',
      },
    });
    return next(cloned);
  }
  return next(req);
};
