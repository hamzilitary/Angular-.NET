import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskService } from './services/task.service';

@NgModule({
    declarations: [
      AppComponent,
      HomepageComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpModule,
     

    ],
  providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }
