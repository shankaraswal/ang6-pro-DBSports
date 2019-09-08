import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.css']

})
export class AllLeaguesComponent implements OnInit {
  title= 'All Leagues';
  allLeagues:any = {};
  count: number;
  constructor(private http : Http) {}
  getAllLeauge(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php').pipe(map(res => res.json())
  )}

  ngOnInit() {
    this.getAllLeauge().subscribe(data => {
      this.allLeagues =data;
      this.count=this.allLeagues.leagues.length;
      })

    }

}
