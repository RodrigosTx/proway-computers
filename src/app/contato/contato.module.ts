import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
bootstrapApplication(AppComponent, {
  providers: [
      
      provideEnvironmentNgxMask(maskConfig),
      
  ],
}).catch((err) => console.error(err));


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
    
  ]})

export class ContatoModule { }

