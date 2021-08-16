import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000/users"
  constructor(private _snackBar: MatSnackBar , private http: HttpClient) { }


showMessage(msg: string): void {
  this._snackBar.open(msg,'DEU TUDO CERTO', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"

  })
}

create(user: User) : Observable<User>{
  return this.http.post<User>(this.baseUrl, user)
  }
  creates(user: User) : Observable<User>{
    return this.http.post<User>(this.baseUrl, user)
    }
  
    read():Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl)
    }
  }
  
  

