import { Component, OnInit } from '@angular/core';
//import { FormsModule,FormControl,FormGroup,Validator,FormBuilder, ReactiveFormsModule, Validators, NgForm  } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { AlertService } from '../shared/alert.service';
import { AuthenticationService} from '../shared/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  //form: FormGroup;
  constructor( 
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthenticationService,
   // private _alertService:AlertService,
    private _toastr:ToastrService,) { }

    
//   onSubmit(form) {
    
//     if (form.username=="shashi" && form.password=="shashi") {
//            this._toastr.success('Login', 'Successfully!');
//        this._router.navigate(['app-dashbord']);
//     } else {
//       this._toastr.error('Login', 'Invalid!');
//       return false;
//    }
//  }

 login() {
  this.loading = true;
  this._authService.login(this.model.username, this.model.password)
      .subscribe(
          data => {
              this._toastr.success('Login', 'Successfully!');
              this._router.navigate(['/homePage']);
          },
          error => {
              this.loading = false;
              this._toastr.error('UserName And Password','Invalid!' );
          });
}
  ngOnInit() {
      // reset login status
      this._authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // this.form=new FormGroup({
    //   username:new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])),
    //   password:new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]))
    // })
  }

}
