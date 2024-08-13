import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  Hits,
  InstantSearch,
  SearchBox
} from 'react-instantsearch';
import { history } from 'instantsearch.js/es/lib/routers';


// import { Autocomplete, Hit } from './components';
import { Hit } from './Hit'
import {
  INSTANT_SEARCH_INDEX_NAME
} from '../constants';

function App() {
  const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
  );
  // const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const routing = {
    router: history({
      cleanUrlOnDispose: false,
    }),
  };
  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        future={{
          preserveSharedStateOnUnmount: true,
        }}
        routing={routing}
      >
        <header className="header">
          <div className="header-wrapper wrapper">
            <SearchBox></SearchBox>
            {/* <Autocomplete
              searchClient={searchClient}
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
            /> */}
          </div>
        </header>

        <Configure
          attributesToSnippet={['name:7', 'description:15']}
          snippetEllipsisText="…"
        />
        <div className="container wrapper">

          <div>
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;