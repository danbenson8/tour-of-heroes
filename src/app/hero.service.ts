import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
    
    private heroesUrl = 'api/heroes' // Url to web API

    getHeroes(): Observable<Hero[]> {
        // TODO send the message _after_ fetching heroes
        this.messageService.add('HeroService: fetched heroes');
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    // TODO fix this
    getHero(id: number): Observable<Hero> {
        // TODO send the message _after_ fetching heroes
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of();
    }


}
