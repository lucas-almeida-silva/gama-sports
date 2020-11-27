import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FieldsModule } from './components/fields/fields.module';
import { SimpleTopBarComponent } from './components/simple-top-bar/simple-top-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimpleTopBarComponent, TopBarComponent, FooterComponent, LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SimpleTopBarComponent,
    TopBarComponent,
    FooterComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
