import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { HomeComponent } from './components/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CharactersComponent } from './components/personagens/characters/characters.component';
import { OumaShuComponent } from './components/personagens/ouma-shu/ouma-shu.component';
import { YuzurihaInoriComponent } from './components/personagens/yuzuriha-inori/yuzuriha-inori.component';
import { TsutsugamiGaiComponent } from './components/personagens/tsutsugami-gai/tsutsugami-gai.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTemplateComponent,
    HomeComponent,
    IntroductionComponent,
    CharactersComponent,
    OumaShuComponent,
    YuzurihaInoriComponent,
    TsutsugamiGaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
