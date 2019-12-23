import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Axe' },
      { id: 12, name: 'Bristleback' },
      { id: 13, name: 'Clockwerk' },
      { id: 14, name: 'EarthShaker' },
      { id: 15, name: 'Huskar' },
      { id: 16, name: 'Legion Commander' },
      { id: 17, name: 'Lifestealer' },
      { id: 18, name: 'Pheonix' },
      { id: 19, name: 'Pudge' },
      { id: 20, name: 'Sand King' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}