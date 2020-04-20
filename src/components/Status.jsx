import React from "react";
import {
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonItem,
  IonText,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList,
  IonListHeader,
} from "@ionic/react";
import { cameraOutline, pencilOutline } from "ionicons/icons";

const Status = () => {
  return (
    <div>
      <IonSearchbar></IonSearchbar>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
            </IonAvatar>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel>
                    My Status
                    <IonText color="medium">
                      <p>10h ago</p>
                    </IonText>
                  </IonLabel>
                </IonCol>
                <IonCol className="ion-text-right">
                  <IonRow>
                    <IonCol>
                      <IonIcon size="large" icon={cameraOutline} />
                    </IonCol>
                    <IonCol>
                      <IonIcon size="large" icon={pencilOutline} />
                    </IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonLabel>
        <IonText color="medium" className="ion-margin-start ">
          <p>RECENT UPDATES</p>
        </IonText>
      </IonLabel>
      <IonList>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/52825790_2112482928820512_5931082194888949760_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=brATInQMhAgAX9Ssd8G&_nc_ht=scontent-amt2-1.xx&oh=e5ca55daa20f6db645c2ad6ad472bbd1&oe=5EC23FD6" />
          </IonAvatar>
          <IonList>
            <h6>Tony Nta</h6>
            <IonText color="medium">
              {" "}
              <p>45m ago</p>
            </IonText>
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Hasina Hassan</h6>
            <IonText color="medium">
              {" "}
              <p>1hr ago</p>
            </IonText>
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Jane Doe</h6>
            <IonText color="medium">
              {" "}
              <p>2hr ago</p>
            </IonText>
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>John Doe</h6>
            <IonText color="medium">
              {" "}
              <p>2hr ago</p>
            </IonText>
          </IonList>
        </IonItem>
      </IonList>
    </div>
  );
};

export default Status;
