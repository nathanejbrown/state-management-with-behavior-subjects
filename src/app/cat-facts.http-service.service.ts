import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsHttpServiceService {
  private catFactsSubject = new BehaviorSubject<any>(null);
  public catFacts$ = this.catFactsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getCatFacts();
  }

  private getCatFacts(): void {
    this.http.get<any>('https://catfact.ninja/facts').pipe(
      map(res => {
        this.catFactsSubject.next(res.data)
      })
    ).subscribe()
  }
}
