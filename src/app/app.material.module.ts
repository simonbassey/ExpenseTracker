import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatTableModule, MatTabsModule,
    MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
    MatTooltipModule} from '@angular/material';

@NgModule({
    imports: [
                MatNativeDateModule,
                MatButtonModule, MatToolbarModule, MatTableModule, MatTabsModule,
                MatIconModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatInputModule,
                MatFormFieldModule,
                MatDialogModule,
                MatDatepickerModule,
                MatSnackBarModule,
                MatTooltipModule
             ],
    exports: [
                MatButtonModule,
                MatToolbarModule,
                MatTableModule,
                MatTabsModule,
                MatIconModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatInputModule,
                MatFormFieldModule,
                MatDialogModule,
                MatDatepickerModule,
                MatSnackBarModule,
                MatTooltipModule
            ]
})
export class AppMaterialModule {}
