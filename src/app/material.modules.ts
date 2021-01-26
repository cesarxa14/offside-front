import { NgModule}           from '@angular/core';
import { MatTabsModule}      from '@angular/material/tabs';
import { MatCardModule}      from '@angular/material/card';
import {MatToolbarModule}    from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}      from '@angular/material/input';
<<<<<<< HEAD
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
=======
import {MatButtonModule} from '@angular/material/button'
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60



@NgModule({
    imports: [
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
<<<<<<< HEAD
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatDialogModule,
        MatBadgeModule,
        MatTableModule,
        MatProgressBarModule
=======
        MatButtonModule
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
    ],
    exports: [
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
<<<<<<< HEAD
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatDialogModule,
        MatBadgeModule,
        MatTableModule,
        MatProgressBarModule
=======
        MatButtonModule
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
    ]
})

export class MaterialModules {}