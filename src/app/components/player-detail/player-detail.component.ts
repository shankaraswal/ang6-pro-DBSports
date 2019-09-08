import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  title="Player Detail"
  playerDetail:any = {};

  constructor(private http : Http) {
   }
  
  getPlayerDetail(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Danny Welbeck').pipe(map(res => res.json())
  )}
  
  ngOnInit() {
    this.getPlayerDetail().subscribe(data => {
      this.playerDetail =data;
      })
     
    }


}
