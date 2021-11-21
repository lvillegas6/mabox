import { Switch, Route } from 'wouter';
import { store, persistor } from '@/store';
import { Provider } from 'react-redux';
import routes from '@/routes'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            {routes.map(route => <Route path={route.path} component={route.component} />)}
          </Switch>
        </PersistGate>
      </Provider>

    </div>
  )
}

export default App
