import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SomethingComponent } from "./something/something.component";
import { HeaderComponent } from "./header/header.component";
import { EmployeeComponent } from "./employee/employee.component";
import { UserinputComponent } from "./userinput/userinput.component";
import { EventdemoComponent } from "./eventdemo/eventdemo.component";
import { ExampledirComponent } from "./exampledir/exampledir.component";
import { SayingsComponent } from './sayings/sayings.component';
import { MatchsayingComponent } from './matchsaying/matchsaying.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { DateService } from "./providers/date.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "about/something", component: SomethingComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "userinput", component: UserinputComponent },
  { path: "eventdemo", component: EventdemoComponent },
  { path: "exampledir", component: ExampledirComponent },
  { path: "sayings", component: SayingsComponent },
  { path: "matchsayings", component: MatchsayingComponent },
  { path: "dates", component: DateDisplayComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SomethingComponent,
    HeaderComponent,
    EmployeeComponent,
    UserinputComponent,
    EventdemoComponent,
    ExampledirComponent,
    SayingsComponent,
    MatchsayingComponent,
    LoginComponent,
    DashboardComponent,
    DateDisplayComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
