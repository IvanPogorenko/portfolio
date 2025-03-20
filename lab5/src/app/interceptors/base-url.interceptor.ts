import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import {Observable} from 'rxjs';

export const BaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3003/';

  const apiReq = req.clone({
    url: `${baseUrl}${req.url}`,
    headers: req.headers.set('Content-Type', 'application/json'),
  });

  return next(apiReq);
};
