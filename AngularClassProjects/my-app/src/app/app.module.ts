import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpletextComponent } from './simpletext/simpletext.component';
import { CalculateComponent } from './calculate/calculate.component';
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './to-do/to-do.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    SimpletextComponent,
    CalculateComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
