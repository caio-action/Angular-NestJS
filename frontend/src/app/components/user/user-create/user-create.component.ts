import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  txtmail= "@hotmail.com"
  user: User = {
    name: '',
    email: `${this.txtmail}`
  }
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  userCreate(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage(' criado!')
      this.router.navigate(['/user'])
    })



  }
  cancel(): void {
    this.router.navigate(['/user'])
  }
}