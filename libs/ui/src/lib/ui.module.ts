import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import {NzTableModule} from 'ng-zorro-antd/table'
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [CommonModule, NzTableModule, NzButtonModule],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
})
export class UiModule {}
