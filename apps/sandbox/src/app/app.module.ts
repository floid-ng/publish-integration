import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RhetosModule } from '@floid-ng/rhetos';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    RhetosModule.forRoot({
      restUrl: 'http://localhost/Centrix2Rhetos/Rest/',
      authentication: 'windows',
      replaceNullWithUndefined: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
