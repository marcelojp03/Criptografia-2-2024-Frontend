// src/app/services/cesar.service.ts
import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CesarService {
  private apiUrl = environment.apiUrl;
  private csrfToken: string | null = null;

  constructor(
    private handler:HttpBackend,
    private http: HttpClient) {
    //this.http=new HttpClient(this.handler);
  }

  fetchCsrfToken(): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        responseType: 'text' as 'json' // Aquí se especifica que la respuesta es de tipo texto
    };
    return this.http.get(`${this.apiUrl}/token`, httpOptions);
}

    

    processText(operationType: 'encrypt' | 'decrypt', text: string, shift: number, language: string): Observable<any> {
        const requestData = { 
            text:text, 
            shift:shift, 
            language:language 
        };
        console.info("DATA", requestData)
        const url= this.apiUrl + "/api/caesar/"+ operationType;
        console.info("URL", url)

        const httpOptions = {
            headers : new HttpHeaders({
                'Content-Type': 'application/json',
                //'X-CSRF-TOKEN': this.csrfToken || '',
            })
          };
        return this.http.post<any>(url, requestData, httpOptions);
    } 
}
