import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TODOS_ROUTES } from "./to-dos/to-dos.routes";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'to-dos',
        loadChildren: () => import('./to-dos/to-dos.routes').then(c => c.TODOS_ROUTES),
    }
]