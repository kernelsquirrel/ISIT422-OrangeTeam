import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Armor } from './armordet';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArmorService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}

@Injectable({ providedIn: 'root' })
export class HeroService {

  private armorUrl = 'http://localhost:3000/armor';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    getHeroes(): Observable<Armor[]> {                                     // an array of them
      return  this.http.get<Armor[]>('http://localhost:3000/armor');  
      //return  this.http.get<Hero[]>(' https://kurtmongoserver.azurewebsites.net/heroes/');
    }
    getHero(id: number): Observable<Armor> {                        // one of them
      return this.http.get<Armor>('http://localhost:3000/armor/' + id);
      //return this.http.get<Hero>('https://kurtmongoserver.azurewebsites.heroes/' + id);
    }
}