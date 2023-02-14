import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenService} from "../../basic-services/token-service/token.service";
import {UrlService} from "../../basic-services/url-service/url.service";
import {HttpClient} from "@angular/common/http";
import {ResponseFromBackEnd} from "../../shared/response-from-back-end";
import {Location} from '@angular/common';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-overlay',
  templateUrl: './login-overlay.component.html',
  styleUrls: ['./login-overlay.component.scss']
})

export class LoginOverlayComponent implements OnInit{


  loginForm: any;
  errorMessage: String= "";
  showError:boolean=false;

  load:boolean=false;
  constructor(private fb: FormBuilder, private tokenService: TokenService,private http: HttpClient, private url: UrlService,private router: Router) {}

  ngOnInit() {

    if(this.tokenService.getToken() != "") this.router.navigate(["/software"])

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(form:FormGroup){
    let formData = new FormData();
    formData.append('email', form.value.email);
    formData.append('password', form.value.password);
    this. load = true
    this.http.post((this.url.getUrl() + "user/token"), formData)
      .subscribe(response =>{
          let data :ResponseFromBackEnd = response as ResponseFromBackEnd;
          if (!data.success) {
            this.errorMessage = data.error;
            this.showError = true;
          }else{
            this.tokenService.setToken(data.data.token)
          }
          this. load = false
          this.router.navigate(["/software"]);
        },
        error => {
          console.error('Error:', error)
          this. load = false
        });
  }


}





