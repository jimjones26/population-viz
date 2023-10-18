import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
  const dataUrl: string = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv'
  const res = await fetch(dataUrl)

  return { data: await res.text() };
};