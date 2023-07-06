import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userSub$?:Subscription;
  searchSub$?:Subscription;
  users:any[]=[];
  latestCheck:boolean=false;
  words:string[]=['hello', 'bird', 'table', 'football', 'pipe', 'code'];
  convertToTitleCaseWords:string[]=[];
  constructor(private data:DataService){}
  getUsers(){
    this.userSub$=this.data.getUsers().subscribe({
      next:(users) => console.log(`Data recieved`,users),
      error:(err)=>console.log(err),
      complete:()=>console.log(`user request completed!!!`),
    });
  }
searchUsers(searchUserInp:HTMLInputElement){
  console.log(searchUserInp.value);
  console.log(this.latestCheck);
  if(searchUserInp.value.length > 0){
this.users=[];
this.searchSub$=this.data.searchUsers(searchUserInp.value,this.latestCheck)
.subscribe({
  next:(users) => {
    console.log('User List',users);
    this.users=<any>users;
  },
  error: (err) => console.log(err),
  complete: () => console.log('search completed!!!'),
});
  }
}
convertToTitleCase(word:string){
return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
}
convertToTitleCaseAndDisplay(){
  this.convertToTitleCaseWords=[];
  this.words.forEach(words=>{
  const  convertToTitleCaseWord=this.convertToTitleCase(words);
  this.convertToTitleCaseWords.push(convertToTitleCaseWord);
  })
}
}
