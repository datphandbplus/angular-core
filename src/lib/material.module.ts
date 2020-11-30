import { NgModule } from '@angular/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {
	MatCheckboxModule, MatButtonModule, MatInputModule,
	MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
	MatFormFieldModule, MatRadioModule, MatSelectModule,
	MatSliderModule, MatSlideToggleModule, MatMenuModule,
	MatSidenavModule, MatToolbarModule, MatListModule,
	MatGridListModule, MatCardModule, MatStepperModule,
	MatTabsModule, MatExpansionModule, MatButtonToggleModule,
	MatChipsModule, MatIconModule, MatProgressSpinnerModule,
	MatProgressBarModule, MatDialogModule, MatTooltipModule,
	MatSnackBarModule, MatTableModule,
	MatSortModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
	imports: [
		MatCheckboxModule, MatButtonModule, MatInputModule,
		MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
		MatFormFieldModule, MatRadioModule, MatSelectModule,
		MatSliderModule, MatSlideToggleModule, MatMenuModule,
		MatSidenavModule, MatToolbarModule, MatListModule,
		MatGridListModule, MatCardModule, MatStepperModule,
		MatTabsModule, MatExpansionModule, MatButtonToggleModule,
		MatChipsModule, MatIconModule, MatProgressSpinnerModule,
		MatProgressBarModule, MatDialogModule, MatTooltipModule,
		MatSnackBarModule, MatTableModule, NgxMatSelectSearchModule,
		MatSortModule, MatPaginatorModule,
	],
	exports: [
		MatCheckboxModule, MatButtonModule, MatInputModule,
		MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule,
		MatFormFieldModule, MatRadioModule, MatSelectModule,
		MatSliderModule, MatSlideToggleModule, MatMenuModule,
		MatSidenavModule, MatToolbarModule, MatListModule,
		MatGridListModule, MatCardModule, MatStepperModule,
		MatTabsModule, MatExpansionModule, MatButtonToggleModule,
		MatChipsModule, MatIconModule, MatProgressSpinnerModule,
		MatProgressBarModule, MatDialogModule, MatTooltipModule,
		MatSnackBarModule, MatTableModule, NgxMatSelectSearchModule,
		MatSortModule, MatPaginatorModule,
	],
})
export class MaterialModule {}
