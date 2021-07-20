import { Component, OnInit } from '@angular/core';
import { RandomTestCaseEnum } from './core/enum/random-test-case.enum';
import { RandomizedTestingService } from './core/services/randomized-testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ab-testing';

  randomTestCase: RandomTestCaseEnum;

  constructor(private randomizedTestingService: RandomizedTestingService) {
    this.randomTestCase = this.randomizedTestingService.generateTest(50);
  }

  ngOnInit() {


    console.log('teste com 10%', this.randomizedTestingService.generateTest(10));
    console.log('teste com 20%', this.randomizedTestingService.generateTest(20));
    console.log('teste com 30%', this.randomizedTestingService.generateTest(30));
    console.log('teste com 40%', this.randomizedTestingService.generateTest(40));
    console.log('teste com 50%', this.randomizedTestingService.generateTest(50));
    console.log('teste com 60%', this.randomizedTestingService.generateTest(60));
    console.log('teste com 70%', this.randomizedTestingService.generateTest(70));
    console.log('teste com 80%', this.randomizedTestingService.generateTest(80));
    console.log('teste com 90%', this.randomizedTestingService.generateTest(90));
    console.log('teste com 100%', this.randomizedTestingService.generateTest(100));
  }
}
