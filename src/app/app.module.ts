import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlBR } from './shared/utils/MatPaginatorIntlBR';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    NgImageSliderModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    { 
      provide: MatPaginatorIntl, 
      useClass: MatPaginatorIntlBR
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
