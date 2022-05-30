import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { CategoryRepository } from './domain/repository/Category.repository';
import { CategoryImplRepository } from './infra/CategoryImpl.repository';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PartsRepository } from './domain/repository/Parts.repository';
import { PartsImplRepository } from './infra/PartsImpl.repository';

const build: Provider[] = [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide: CategoryRepository, useClass: CategoryImplRepository },
  { provide: PartsRepository, useClass: PartsImplRepository },
]

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: build,
  bootstrap: [AppComponent],
})
export class AppModule { }
