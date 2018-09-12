import { MessageModule } from './../message/message.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule
  ],
  providers: [DatePipe],
  exports: [ChatComponent],
  declarations: [ChatComponent]
})
export class ChatModule { }
