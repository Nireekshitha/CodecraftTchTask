import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }
