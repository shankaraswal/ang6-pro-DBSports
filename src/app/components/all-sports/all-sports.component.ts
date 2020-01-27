import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all-sports',
  templateUrl: './all-sports.component.html',
  styleUrls: ['./all-sports.component.css']
})

@Injectable()
export class AllSportsComponent implements OnInit {
  title = 'All Sports';
  allSports: any = {};
  count: any;
  message: string;
  sportType: string;
  filtertext: any = '';


  constructor(private http:Http, private data: DataService) {}

  getAllSports() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php').pipe(map(res => res.json())
    )
  }

  ngOnInit() {
    this.getAllSports().subscribe(data => {
      this.allSports = data;
      this.count = this.allSports.sports.length;
    })
  }
  setSportType(list) {
    this.sportType = list.strSport;
    this.data.changeMessage(this.sportType)
    console.log('2 to service setSportType => ' + this.sportType);
  }



}
