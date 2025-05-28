import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
mockusers:user[]=[
  {username:'admin',password:'admin',fullname:'مدیریت',enabled:true},
  {username:'guest',password:'guest',fullname:'مهمان',enabled:false},
  {username:'user',password:'user',fullname:'کاربر',enabled:true},


];
check(username:string,password:string,){
  let result=this.mockusers.filter(u=>u.username==username&&u.password==password&&u.enabled==true);
  if(result.length==0){
    return false;
  }
  return true;

}
}
interface user{
  username:string;
  password:string;
  fullname:string;
  enabled:boolean;

}
