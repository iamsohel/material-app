import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

const routes : Routes = [
    {
        path: 'auth',
        loadChildren : 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        loadChildren : 'app/profile/profile.module#ProfileModule'
    },
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}