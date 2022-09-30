import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ExampleobsService {
  constructor(private http: HttpClient) {}

  getExample(): Observable<any> {
    let headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.get("https://api.chucknorris.io/jokes/random", headers);
  }
}
