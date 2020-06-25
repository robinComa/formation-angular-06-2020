import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Animal } from './animal';
import { Observable } from 'rxjs';
import { AnimalService } from './animal.service';

@Injectable()
export class AnimalResolverService implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Animal | Observable<Animal> | Promise<Animal> {
    const id = +route.paramMap.get('id');
    return this.animalService.get(id);
  }
}
