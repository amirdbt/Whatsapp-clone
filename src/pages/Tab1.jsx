import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Status from "../components/Status";
import "./Tab1.css";

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Status</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Status />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
