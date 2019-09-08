import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class SoccerService {
  constructor(private http : Http, ) { }


  getSoccer(){
    //console.log('called');
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Fighting').pipe(map(res => res.json())
   )}
}