import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load: import('./$types').LayoutLoad = createKitDocsLoader({
  sidebar: {
    '/': null,
    '/community-admin': '/community-admin',
    '/user-admin': '/user-admin',
    '/db-admin': '/db-admin',
    '/site-admin': '/site-admin',
  },
});