import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  title="Team Detail"
  teamId=133604;
  teamName:string;
  teamDetail:any = {};
  count:number;
  constructor(private http : Http) {
   }
  
  getTeamDetail(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id='+this.teamId).pipe(map(res => res.json())
  )}
  
  ngOnInit() {
    this.getTeamDetail().subscribe(data => {
      this.teamDetail =data;
      this.teamName=this.teamDetail.player[0].strTeam;
      this.count=this.teamDetail.player.length;
      })
     
    }


}
