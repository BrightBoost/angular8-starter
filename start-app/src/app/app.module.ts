import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SomethingComponent } from './something/something.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserinputComponent } from './userinput/userinput.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "about/something", component: SomethingComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "userinput", component: UserinputComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SomethingComponent,
    HeaderComponent,
    EmployeeComponent,
    UserinputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
