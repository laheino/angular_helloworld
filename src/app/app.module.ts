import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorld } from './helloworld.component';
import { MyComponent } from './mylist.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
