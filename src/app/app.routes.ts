import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { MoreComponent } from './more.component';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        component: FormComponent
    },
    {
        path: 'more',
        title: 'learn more',
        component: MoreComponent
    }
];
