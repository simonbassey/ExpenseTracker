import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMaterialModule } from '../app.material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule
    ],
    exports: [
        AppMaterialModule,
        AppHeaderComponent
    ],
    declarations: [AppHeaderComponent]
})
export class SharedModule {

}

