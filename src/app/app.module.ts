import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { childComponent } from '../app/child/child.component';
import { parentComponent } from '../app/parent/parent.component';
import { myformComponent } from '../app/form/myform.component';

import { firstComponent } from '../app/observables/firstComponent';
import { secondComponent } from '../app/observables/secondComponent';

import { MyPipe } from '../app/pipes/my.pipe';

import { CommunicationService } from '../app/services/communication.service';
import { myService } from '../app/services/my.service';

@NgModule({
  declarations: [
    AppComponent,
    childComponent,
    parentComponent,
    myformComponent,
    firstComponent,
    secondComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommunicationService, myService],
  bootstrap: [AppComponent]
})
export class AppModule { }
