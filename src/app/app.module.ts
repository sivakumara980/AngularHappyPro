import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    DataBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
