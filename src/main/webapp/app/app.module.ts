import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PrivSharedModule } from 'app/shared/shared.module';
import { PrivCoreModule } from 'app/core/core.module';
import { PrivAppRoutingModule } from './app-routing.module';
import { PrivHomeModule } from './home/home.module';
import { PrivEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PrivSharedModule,
    PrivCoreModule,
    PrivHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PrivEntityModule,
    PrivAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class PrivAppModule {}
