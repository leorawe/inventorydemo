import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';

type HitProps = {
  hit: AlgoliaHit<{
    objectID: string;
    title: string;
    rendered_html: string;
  }>;
};

export function Hit({ hit }: HitProps) {
  return (
    <article className="hitItem">
      <a href={hit.objectID}>{hit.title}</a>
    </article>
  );
}
