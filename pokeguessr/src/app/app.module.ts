import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RedBlueModule } from './redblue/redblue.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterOutlet, CommonModule, RedBlueModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}
