import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox
} from 'react-instantsearch';
import { history } from 'instantsearch.js/es/lib/routers';


import { Autocomplete } from './Autocomplete';
import { Hit } from './Hit';
import './App.css';
import {
  INSTANT_SEARCH_INDEX_NAME
} from '../constants';

function App() {
  const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);
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
        <div>
          <Autocomplete
            searchClient={searchClient}
            placeholder="Search"
            detachedMediaQuery="none"
            openOnFocus
          />
        </div>


        <Configure
          attributesToSnippet={['name:7', 'description:15']}
          snippetEllipsisText="…"
        />
        <div className="container wrapper">

          <div>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;