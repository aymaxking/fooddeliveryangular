import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get f() {
    return this.form.controls;
  }


  resetValue() {
    this.form.reset({email: '', password: ''});
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.form.value).subscribe(res => this.handleResponse(res))
  }

  handleResponse(res: any) {
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/places")
  }
}
