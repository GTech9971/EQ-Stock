import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./presentations/category-page/category.page.module').then(m => m.CategoryPageModule)
  },
  {
    path: '',
    redirectTo: 'registry',
    pathMatch: 'full'
  },
  {
    path: 'registry',
    loadChildren: () => import('./presentations/registry-eq-page/registry-eq.module').then(m => m.RegistryEqModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
