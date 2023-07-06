import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheResolverService } from './cache-resolver';
import { CacheInterceptor } from './cache-interceptor';
import { DataService } from './data.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService,
    CacheResolverService,
    {provide:HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true,},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
