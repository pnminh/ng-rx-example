import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [AppComponent, PersonAddComponent, PersonListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
