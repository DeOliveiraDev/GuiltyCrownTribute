import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { CharactersComponent } from './components/personagens/characters/characters.component';

const routes: Routes = [{
  path: '',
  component: PageTemplateComponent,
  children: [{
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Introduction',
    component: IntroductionComponent
  },
  {
    path: 'Characters',
    component: CharactersComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
