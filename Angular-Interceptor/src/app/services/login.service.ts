import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data) {
    // data = { email: 'admin@example.com', password: 'Test@123' };
    data = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
  };
    return this.http.post('https://reqres.in/api/login', data);
}
getCustomerDetails() {
  return this.http.get('https://reqres.in/api/users?page=2');
}
}
