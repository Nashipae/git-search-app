import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid: "";
  private clientsecret: "a08f757f39d4c32a41bf3c8228d25bc51e232845";

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'nashipae';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +  this.clientid + "&client_secret=" + this.clientsecret).map(res =>res);
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +  this.clientid + "&client_secret=" + this.clientsecret).map(res =>res);
  }
}
