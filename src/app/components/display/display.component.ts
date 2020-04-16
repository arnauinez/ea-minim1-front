import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  something: string[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getAllStudents = () => {
    this.http.get('/std').subscribe(  (students: Students[]) => { 
      this.something[0] = students[0].Name;


      // this.userProfile.id = profile._id;
      // this.userProfile.username = profile.Username;
      // this.userProfile.email = profile.Email;
      // this.userProfile.history = profile.History;
    });
  }
}
interface Students {
  _id: string,
  Name: string,
  Addres: string,
  Phones: string[],
  Studies: string[]
}
interface Subject {
  _id: string,
  Name: string,
  Students: []
}

