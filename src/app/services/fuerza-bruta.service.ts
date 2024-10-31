import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
  })
  export class FuerzaBrutaService {
    private apiUrl = environment.apiUrl;
  
    constructor(
      private handler:HttpBackend,
      private http: HttpClient) {
      //this.http=new HttpClient(this.handler);
    }
  
      processText(text: string): Observable<any> {
          const requestData = { 
              text:text, 
          };
          console.info("DATA", requestData)
          const url= this.apiUrl + "/api/ccc/crack";
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
  