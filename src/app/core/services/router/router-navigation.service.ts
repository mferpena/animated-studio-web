import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterNavigationService {
  constructor(private router: Router) { }

  /**
   * Navega a una ruta simple.
   * @param path - Ruta simple (e.g., 'home', 'contact-us').
   */
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  /**
   * Navega a una ruta dinámica con parámetros.
   * @param path - Ruta base (e.g., 'work', 'user').
   * @param params - Parámetros de la ruta (e.g., { id: 123 }).
   */
  navigateToWithParams(path: string, params: { [key: string]: any }): void {
    this.router.navigate([path, params]);
  }

  /**
   * Navega con query params adicionales.
   * @param path - Ruta base.
   * @param queryParams - Parámetros de consulta (e.g., { page: 1, filter: 'active' }).
   */
  navigateWithQueryParams(path: string, queryParams: { [key: string]: any }): void {
    this.router.navigate([path], { queryParams });
  }
}
