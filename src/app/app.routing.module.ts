import {RouterModule, Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { TableViewComponent } from './table-view/table-view.component';


const routes: Route[] = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'view/chart',
                component: ChartViewComponent
            },
            {
                path: 'view/timeline',
                component: TimelineViewComponent
            },
            {
                path: 'view/calendar',
                component: CalendarViewComponent
            },
            {
                path: 'view/table',
                component: TableViewComponent
            }
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {}
