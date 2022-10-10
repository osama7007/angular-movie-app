import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: "favorites",
    component: FavoritesComponent
  },
  {
    path : 'template-form',
    component: TemplateFormComponent
  },
  {
    path : 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path:"**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
