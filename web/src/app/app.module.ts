import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatCardModule,
  MatChipsModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material/';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from './home/project/project.component';
import { MarkComponent } from './home/project/mark/mark.component';
import { SettingComponent } from './home/project/setting/setting.component';
import { ResultComponent } from './home/project/result/result.component';
import { JobComponent } from './home/project/job/job.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProjectComponent,
    MarkComponent,
    SettingComponent,
    ResultComponent,
    JobComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
