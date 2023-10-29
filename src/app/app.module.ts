import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { MenuAddFormComponent } from './menu-add-form/menu-add-form.component';
import { MenuListModule } from './menu-list/menu-list.module';

@NgModule({
  declarations: [
    AppComponent, 
    MenuAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    MenuModule,
    MenuListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
