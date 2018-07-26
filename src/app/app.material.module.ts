import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatTableModule, MatTabsModule,
    MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule,
    MatTooltipModule, MatCardModule, MatPaginatorModule, MatSidenavModule, MatListModule, MatMenuModule} from '@angular/material';

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
                MatTooltipModule,
                MatCardModule,
                MatPaginatorModule,
                MatListModule,
                MatSidenavModule,
                MatMenuModule
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
                MatTooltipModule,
                MatCardModule,
                MatPaginatorModule,
                MatListModule,
                MatSidenavModule,
                MatMenuModule
            ]
})
export class AppMaterialModule {}
