import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { UserService } from '../shared/user.service';
// import { AlertService } from '../shared/alert.service';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService,
     //  private _alertService:AlertService,
        private _toastr:ToastrService) { }

        submitted = false;
 
   onSubmit(){
      this.loading = true;
      this.submitted = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                 this._toastr.success('Registration successful');
                  this.router.navigate(['/app-login']);
              },
              error => {
                 // this._alertService.error(error);
                  this._toastr.error('Username already exists', 'please choose another one!');
                  this.loading = false;
              });
  }
  ngOnInit() {
    // this.form=new FormGroup({
    //   firstname:new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])),
    //   lastname:new FormControl("", Validators.compose([
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]))
    // })
  }

}
