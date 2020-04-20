import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Settings from "../components/Settings"
import "./Tab5.css";

const Tab5 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Settings />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
