import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { Error404Component } from "./error404/error404.component";
import { MatToolbar, MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [MatToolbar],
  bootstrap: [AppComponent]
})
export class AppModule {}
