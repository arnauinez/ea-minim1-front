import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Result } from 'src/app/models/Result';

type ResultProfile = {     
  id: string,
  name: string,
  date: string,
  positive?: boolean,
  testType: string
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  something : any[]= [];

  positiveStr: string = '';

  public resultProfile: ResultProfile = {
    id: '',
    name: '',
    date: '',
    testType: ''
  }

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getAllResults = () => {
    this.http.get('/res').subscribe(  (result: Result[]) => {
      
      console.log(result);
      result.forEach((val, i) => {
        this.something.push(result[i]._id);
        this.something.push(result[i].Name);
        this.something.push(result[i].Date);
        this.something.push(result[i].Positive);
        this.something.push(result[i].TestType);
        this.something.push('_________________');
        // this.resultProfile.id = result[i]._id;
        // this.resultProfile.name = result[i].Name;
        // this.resultProfile.date = result[i].Date;
        // this.resultProfile.positive = result[i].Positive;
        // this.resultProfile.testType= result[i].TestType;
        console.log(this.resultProfile);
      });
    });
  }

  postNewDefaultResult = () => {
    const result: Result = {
      Name: 'Nuevo1',
      Positive: false,
      TestType: 'PCR'
    }
    this.http.post('/res', result).subscribe(( res => { console.log(res) }));
  }
  postNewResult = () => {
    this.resultProfile.positive = (this.positiveStr === 'true');
    const result: Result = {
      Name: this.resultProfile.name,
      Positive: this.resultProfile.positive,
      TestType: 'PCR'
    };
    this.http.post('/res', result).subscribe(( res => { console.log(res) }));
  }

  patchResult = () => {
    this.resultProfile.positive = (this.positiveStr === 'true');
    const result: Result = {
      _id: this.resultProfile.id,
      Name: this.resultProfile.name,
      Positive: this.resultProfile.positive,
      TestType: 'PCR'
    };
    this.http.post(`/res/edit`, result).subscribe(( res => { console.log(res) }));
  }

}


