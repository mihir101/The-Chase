import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { CountdownTimerComponent }  from '../timer/timer.component';

@Component({
  selector: 'app-round-one',
  templateUrl: './round-one.component.html',
  styleUrls: ['./round-one.component.css']
})
export class RoundOneComponent implements OnInit {
  data: any;
  loading: boolean;
  JSON;
  result: string;
  showResult: boolean;
  tallyAmount: number;
  isClickedOnce: boolean;
  answersArray: any;
  message: string;
  isTimeUp: boolean;
  enableRoundTwo : boolean = false;
   
  constructor(private http: Http) {
    this.tallyAmount = 0;
    this.JSON = JSON;
    this.loading = true;
    this.showResult = false;
    this.isClickedOnce = false;
    this.isTimeUp = false;
  }

  ngOnInit() {
  }

  GetNewQuestion(): void {
    this.result ="";
    this.loading=true;
    this.http.request('https://opentdb.com/api.php?amount=1&type=multiple')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.answersArray = this.ShuffleAnswers(this.data.results[0].incorrect_answers.concat(this.data.results[0].correct_answer));
      this.loading = false;
      
    });

  }
  
private ShuffleAnswers(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  CheckAnswer(submittedAnswer: string):void{
    
    
    if(submittedAnswer === this.data.results[0].correct_answer)
    {
      //alert("\""+submittedAnswer+"\" is the correct answer!");
      this.result = "correct";
      this.tallyAmount = this.tallyAmount+5000;
      this.message = "This is the correct answer!"
    }
    else
    {
      // alert("Oops! \""+ submittedAnswer +"\" is the wrong answer!\n\""+ this.data.results[0].correct_answer + "\" is the correct answer!");
      this.result = "incorrect";
      this.message="Sorry,this is the wrong answer";
    }
    this.showResult= true;
    
    window.setTimeout(this.AlertResult.bind(this),1000);
    //window.setTimeout(this.GetNewQuestion.bind(this),1000);
  }

private AlertResult():void{
  //alert(this.message);
  this.GetNewQuestion.bind(this)();
}
  }
