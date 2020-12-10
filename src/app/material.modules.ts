import { NgModule}           from '@angular/core';
import { MatTabsModule}      from '@angular/material/tabs';
import { MatCardModule}      from '@angular/material/card';
import {MatToolbarModule}    from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}      from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
    imports: [
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatTabsModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})

export class MaterialModules {}