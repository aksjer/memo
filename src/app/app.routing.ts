import { RouterModule, Routes } from '@angular/router'
import { PaquetComponent } from './paquet/paquet.component'
import { HomeComponent } from './home/home.component';

const routes: Routes =
  [
    // {
    //   path: '**', redirectTo: 'home', pathMatch: 'full'
    // },
    {
      path:'home', component: HomeComponent
    },
    {
      path: 'game', component: PaquetComponent
    }
  ]

export const routing = RouterModule.forRoot(routes)

