import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable() 
export class DataService{
    constructor(private http:HttpClient){}
getUsers(refresh?:boolean):Observable<HttpResponse<any>>{
return this.http.get<HttpResponse<any>>('https://6231f15359070d92733f63aa.mockapi.io/api/v1/users');
}
searchUsers(name:string,latest:boolean):Observable<HttpResponse<any>>{
    const httpOptions={
        headers:new HttpHeaders(),
    };
    if(latest){
        httpOptions.headers=httpOptions.headers.set('x-refresh','true');
    }
    return this.http.get<HttpResponse<any>>(`https://6231f15359070d92733f63aa.mockapi.io/api/v1/users?name=${name}&username=${name}`,httpOptions);
}
}