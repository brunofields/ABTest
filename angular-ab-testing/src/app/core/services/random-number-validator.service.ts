import { Injectable } from '@angular/core';
import { testRange } from '../types/test-range';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberValidatorService {

  constructor() { }

  validate(value: testRange): number[] {
    switch (value) {
      case (10):
        return [1];
        break;
      case (20):
        return [1, 2];
        break;
      case (30):
        return [1, 2, 3];
        break;
      case (40):
        return [1, 2, 3, 4];
        break;
      case (50):
        return [1, 2, 3, 4, 5];
        break;
      case (60):
        return [1, 2, 3, 4, 5, 6];
        break;
      case (70):
        return [1, 2, 3, 4, 5, 6, 7];
        break;
      case (80):
        return [1, 2, 3, 4, 5, 6, 7, 8];
        break;
      case (90):
        return [1, 2, 3, 4, 5, 6, 7, 8, 9];
        break;
      case (100):
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        break;
      default:
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        break;
    }

  }
}
