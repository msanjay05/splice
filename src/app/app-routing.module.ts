import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
  { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
