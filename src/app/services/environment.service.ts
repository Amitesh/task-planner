import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IEnvironment } from '../modal/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  constructor() {}

  get apiUrl() {
    return environment.apiUrl;
  }

  get production() {
    return environment.production;
  }
}
