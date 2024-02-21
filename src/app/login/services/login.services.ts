import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient)
    {

    }

     login(loginDTO: LoginDTO) {
        return this.http.post("http://localhost:8080/login", loginDTO);
      }

}