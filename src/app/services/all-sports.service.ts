import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class AllSportsService {
  constructor(private http : Http ) { }
  getAllSports(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php').pipe(map(res => res.json())
    )}
}
