import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonImg,
  IonTitle,
  IonRouterLink,
  IonBackButton,
} from '@ionic/react';

import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader>
    <IonToolbar color="tertiary">
      <IonButtons slot="start">
        {title === 'Profil' ? (
          <IonBackButton defaultHref="/" />
        ) : (
          <IonMenuButton />
        )}
      </IonButtons>
      <IonRouterLink slot="end" routerLink="/profile">
        <IonAvatar className={styles.avatar} >
          <IonImg src="/assets/images/avtr.jpg" alt="avatar" />
        </IonAvatar>
      </IonRouterLink>
      <IonTitle className={styles.logo}>
        <IonImg src="/assets/images/actic.png" alt="logo" />
      </IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
