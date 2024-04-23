// import { PUBLIC_ENV } from '$env/static/public';
// import type { Handle } from '@sveltejs/kit';

// Purpose: remove _dix_what_ever_ for production.
// this works only isolated words not in class
// if it is used with {}, then it won't replace them

// export async function handle({ event, resolve }) {
//   return resolve(event, {
//     transformPageChunk: ({ html }) => {
//       const regex = /\b_\w+?_\b/g;
//       return html.replaceAll( regex , '')
//     },
//   })
// }
