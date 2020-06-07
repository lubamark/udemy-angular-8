import {ColorDirective} from './color.directive';
import {NgModule} from '@angular/core';
import {PageNamePipe} from './page-name.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        ColorDirective,
        PageNamePipe
    ],
    exports: [
        ColorDirective,
        PageNamePipe,
        CommonModule
    ]
})

export class SharedModule {}
