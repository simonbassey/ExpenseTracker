import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatTableModule, MatTabsModule,
    MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, MatFormFieldModule, MatSelectModule,
    MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule, MatTooltipModule,
    MatCardModule, MatPaginatorModule, MatSidenavModule, MatListModule, MatMenuModule, MatDividerModule} from '@angular/material';

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
                MatMenuModule,
                MatDividerModule,
                MatSelectModule
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
                MatMenuModule,
                MatDividerModule,
                MatSelectModule
            ]
})
export class AppMaterialModule {}
