import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})

export class LeagueDetailComponent implements OnInit {
  title: string;
  leagueObj:any={};
  leagueDetail:any = {};
  count:number;
  message:any= {};
  sportLeagueDetail:any = {}; 

  constructor(private http : Http, private data: DataService) {}
  getLeaugeDetail(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l='+this.leagueObj.id).pipe(map(res => res.json())
  )}
  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.leagueObj = this.message;

    this.getLeaugeDetail().subscribe(data => {
      this.leagueDetail =data;
      this.title = this.leagueObj.league+ ', ' + this.leagueObj.country;
      this.count=this.leagueDetail.table.length;
      })
    }
}
