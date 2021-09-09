import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponent = [
  MatButtonModule,
  MatMenuModule,
  MatBadgeModule,
];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]

})
export class MaterialModule { }
