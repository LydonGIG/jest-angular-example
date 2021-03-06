import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyClient {


  private url = 'http://localhost:1234';

  constructor(private http: HttpClient) {
  }

  getDummy$(): Observable<Reponse> {
    return this.http.get<Reponse>(`${this.url}/dummies`);
  }
}

export interface Reponse {
  value: string;
}
