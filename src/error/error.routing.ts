import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ErrorComponent } from './components/error.component';

const routes: Routes = [
	{
		path		: '500',
		component	: ErrorComponent,
		data		: { title: 'Server Internal Error', code: 500 },
	},
	{
		path		: '404',
		component	: ErrorComponent,
		data		: { title: 'Not Found', code: 404 },
	},
	{
		path		: '403',
		component	: ErrorComponent,
		data		: { title: 'Permission Denied', code: 403 },
	},
	{
		path		: '400',
		component	: ErrorComponent,
		data		: { title: 'Bad Request', code: 400 },
	},
];

export const routingProviders: Array<any>[] = [];
export const routing: ModuleWithProviders = RouterModule.forChild( routes );
