import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})

export class SportDetailComponent implements OnInit {
  sportType:string;
  title: string;
  sportDetail:any = {};
  count:number;
  message:string;
  sportLeagueDetail:any = {};

  constructor(private http : Http, private data: DataService) { }
  getSportDetail(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s='+this.sportType).pipe(map(res => res.json())
  )}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.sportType = this.message;
    console.log('4 got in detail : sportType =>' +   this.sportType);


    this.getSportDetail().subscribe(data => {
      this.sportDetail =data;
      this.title = this.sportType + ' Leagues'
      this.count=this.sportDetail.countrys.length;
      })
    }

    setLeagueDetail(list) {
      this.sportLeagueDetail.id = list.idLeague;
      this.sportLeagueDetail.country = list.strCountry;
      this.sportLeagueDetail.league = list.strLeague;
      this.sportLeagueDetail.sport = list.strSport;
      this.data.changeMessage(this.sportLeagueDetail)
    }
  }
