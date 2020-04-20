import React from "react";
import {
  IonCard,
  IonCardContent,
  IonAvatar,
  IonText,
  IonLabel,
  IonItem,
  IonIcon
} from "@ionic/react";
import {starOutline,laptopOutline,swapVerticalOutline,logoWhatsapp,notificationsOutline,keyOutline,informationOutline} from "ionicons/icons"

const Settings = () => {
  return (
    <div>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
            </IonAvatar>
            <IonLabel>
              Amir Dambatta <br />
              <IonText color="medium">
                <p>I'm from outta space</p>
              </IonText>
            </IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonIcon icon={starOutline} slot="start" />
            <IonLabel>Starred Messages</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={laptopOutline} slot="start" />
            <IonLabel>Whatsapp Web/Desktop</IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonIcon icon={keyOutline} slot="start" />
            <IonLabel>Account</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={logoWhatsapp} slot="start" />
            <IonLabel>Chats</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={notificationsOutline} slot="start" />
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={swapVerticalOutline} slot="start" />
            <IonLabel>Data and Storage Usage</IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonIcon icon={informationOutline} slot="start" />
            <IonLabel>Help</IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Settings;
