import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';

type HitProps = {
  hit: AlgoliaHit<{
    objectID: string;
    title: string;
    rendered_item: string;
  }>;
};

export function Hit({ hit }: HitProps) {
  const link: string = hit.objectID.replace('entity:', '').replace(':en', '');
  return (
    <article className="hitItem">
      <div><a href={link}>{hit.title}</a></div>
      <div>{hit.rendered_item}</div>
    </article>
  );
}
