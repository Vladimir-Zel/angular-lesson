import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from "./components/user/user.component";
import {HttpClientModule} from "@angular/common/http";
import {HoverDirective} from "./components/directives/hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./components/pipes/searchPipe";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SetupPageComponent} from './pages/setup-page/setup-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
