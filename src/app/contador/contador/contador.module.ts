import { NgModule } from "@angular/core";

import { contadorComponent } from '../contador.component';
import { CommonModule } from '@angular/common';

@NgModule
(
    {
        declarations: 
        [
            contadorComponent
        ],
        exports:
        [
            contadorComponent
        ]
    }
)
export class contadorModule
{

}