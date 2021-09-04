// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Components
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Material
import { MaterialModule } from '../modules/material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }