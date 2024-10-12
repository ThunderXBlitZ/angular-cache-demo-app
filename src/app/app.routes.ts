import { Routes } from '@angular/router';
import { DBCachePageComponent } from './components/db-cache-demo/db-cache-page/db-cache-page.component';
import { BrowserCachePageComponent } from './components/browser-cache-demo/browser-cache-page/browser-cache-page.component';

export const routes: Routes = [
    {path: 'db-cache', component: DBCachePageComponent},
    {path: 'browser-cache', component: BrowserCachePageComponent},
    {path: '**', component: DBCachePageComponent}
];
