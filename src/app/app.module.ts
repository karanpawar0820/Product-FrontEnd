import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NoopAnimationsModule, // Animations cause delay which interfere with E2E tests
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CommonModule,FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }