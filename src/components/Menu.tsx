import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
  IonImg,
  IonButton,
} from '@ionic/react';
import { logOut, locate, person } from 'ionicons/icons';
import { useEffect, useState, useRef } from 'react';

import '../theme/customTheme.css';
import '../theme/variables.css';
import '../components/Menu.css';

import { logout, useAuth } from '../firebase';



const Menu: React.FC = () => {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);


  async function handleLogout() {
    setLoading(true);
    try {
      await logout();

    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <IonMenu contentId="main">
      <IonHeader >
        <IonToolbar className="" color="tertiary">
          <IonTitle className="logo">

            <IonImg src="/assets/images/actic.png" alt="logo" />

          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary">
        <IonList>
          <IonMenuToggle>
            <IonItem lines="none" color="tertiary" button routerLink="/calender">
              <IonIcon slot="start" color="secondary" icon={person} />
              <IonLabel color="secondary">Developer</IonLabel>
            </IonItem>
            <IonItem lines="none" color="tertiary" button routerLink="/login">

              <IonIcon slot="start" color="secondary" icon={logOut} />
              <IonLabel color="secondary">Log Out</IonLabel>


            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default Menu;
