// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Routing
import { RoutingModule } from './modules/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
