import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {PostComponent} from './post/post.component';
import {PhotoComponent} from "./photo/photo.component";

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "post", component: PostComponent},
  {path: "photo", component: PhotoComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PostComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
