import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule,FormControl,FormGroup,Validator,FormBuilder, ReactiveFormsModule, Validators, NgForm  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { UserService} from './shared/user.service';
import { User} from './shared/user.model';
import { AuthGuard } from './guards/auth.guard';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AuthenticationService} from './shared/authentication.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { SocialloginComponent } from './sociallogin/sociallogin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('59734712179-i4b5dk4p27pqjci6nfgkuipsjvidf8th.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1571068876291626')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegistrationComponent,
    DashbordComponent,
    HomeComponent,
    SocialloginComponent,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
   ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [AuthGuard,AuthenticationService,UserService,
    { provide: [HTTP_INTERCEPTORS,AuthServiceConfig],
      useValue: JwtInterceptor,
      useFactory: provideConfig,
       multi: true },

  // provider used to create fake backend
  fakeBackendProvider
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
