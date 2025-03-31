import { 
    PUBLIC_HOMESERVER
} from '$env/static/public';

import { redirect } from '@sveltejs/kit';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, params, url, cookies, request } ) => {
    const access_token = cookies.get('access_token');

    if(!access_token) {
        redirect(302, '/login');
    }

    return data;
};


