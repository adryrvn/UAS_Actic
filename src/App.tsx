import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Form from './pages/Form';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/customTheme.css';
import './pages/ExploreContainer.css';

// import Create from './pages/Create';
import { grid, keypad } from 'ionicons/icons';
import { calendar } from 'ionicons/icons';
import TabButton from './components/TabButton';
import Calendar from './pages/Calendar';

const App: React.FC = () => (
  <IonApp>
    {/* <IonReactRouter>
   
      <IonTabs >
      <IonRouterOutlet id="main">
        <Route exact path="/note" component={Note} />
        <Route exact path="/calender" component={Calender} />
        <Redirect exact from="/" to="/note" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="tertiary">
      <IonTabButton tab="note" href="/note">
          <IonIcon color="secondary" icon={grid} />
          <IonLabel color="secondary">Memo</IonLabel>
        </IonTabButton>
        <IonTabButton tab="calendar" href="/calender">
          <IonIcon color="secondary" icon={calendar} />
          <IonLabel color="secondary">Calender</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter> */}

    <IonReactRouter>



      <IonRouterOutlet id="main">

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/form">
          <Form />

          <TabButton />
        </Route>
        <Route exact path="/Calendar">
          <Calendar />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
