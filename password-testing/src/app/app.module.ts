import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainSectionComponent } from './core/main-section/main-section.component';
import { InputFieldComponent } from './feature/input-field/input-field.component';
import { PassValidationService } from './shared/services/pass-validation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PassValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
