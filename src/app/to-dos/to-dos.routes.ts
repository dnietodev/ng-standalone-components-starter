import { Route } from "@angular/router";
import { ToDosComponent } from "./to-dos.component";

export const TODOS_ROUTES: Route[] = [
    {
        path: '',
        component: ToDosComponent,
        title: 'To-dos'
    },
    {
        path: ':id',
        loadComponent: () => import('./views/to-do/to-do.component').then(c => c.ToDoComponent)
    },
    {
        path: 'create',
        loadComponent: () => import('./views/create-to-do/create-to-do.component').then(c => c.CreateToDoComponent)
    }
  ]