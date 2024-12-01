import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Guarda un valor en localStorage.
   * @param key Clave única para almacenar el valor.
   * @param value El valor a almacenar.
   */
  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage:`, error);
    }
  }

  /**
   * Obtiene un valor de localStorage.
   * @param key Clave para obtener el valor.
   * @returns El valor almacenado o `null` si no existe.
   */
  getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage:`, error);
      return null;
    }
  }

  /**
   * Elimina un valor de localStorage.
   * @param key Clave del valor a eliminar.
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing key "${key}" from localStorage:`, error);
    }
  }

  /**
   * Limpia todos los datos de localStorage.
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}
