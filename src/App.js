import Routes from '../src/routes'
import {BrowserRouter} from 'react-router-dom';

import {Provider} from './providers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Routes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
