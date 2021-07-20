import { Injectable } from '@angular/core';
import { RandomTestCaseEnum } from '../enum/random-test-case.enum';
import { testRange } from '../types/test-range';
import { RandomNumberValidatorService } from './random-number-validator.service';


@Injectable({
  providedIn: 'root'
})
export class RandomizedTestingService {

  constructor(private randomNumberValidator: RandomNumberValidatorService) { }

  private get randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  generateTest(value: testRange): RandomTestCaseEnum {
    let validNumbers = this.randomNumberValidator.validate(value);
    let jackpot = validNumbers.includes(this.randomNumber);
    return jackpot ? RandomTestCaseEnum.SPECIAL : RandomTestCaseEnum.REGULAR
  }
}
