import React from "react";
import { IonSearchbar, IonList, IonItem, IonAvatar ,IonText, IonListHeader, IonGrid, IonRow, IonCol} from "@ionic/react";

const Chat = () => {
  return (
    <div>
      <IonSearchbar></IonSearchbar>
      <IonList>
          <IonListHeader>
              <IonGrid>
                  <IonRow>
                      <IonCol>
                          <IonText color="primary" className="ion-text-left">
                              <p>Broadcast Lists</p>
                          </IonText>
                      </IonCol>
                      <IonCol>
                          <IonText color="primary" className="ion-text-right">
                              <p>New Group</p>
                          </IonText>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonListHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/52825790_2112482928820512_5931082194888949760_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_ohc=brATInQMhAgAX9Ssd8G&_nc_ht=scontent-amt2-1.xx&oh=e5ca55daa20f6db645c2ad6ad472bbd1&oe=5EC23FD6" />
          </IonAvatar>
          <IonList>
            <h6>Tony Nta</h6>
          <IonText color="medium"> <p>Listen, I've had a pretty messed up day...</p></IonText> 
          </IonList>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Amir Dbt</h6>
          <IonText color="medium">  <p>I've got enough on my plate as it is, and I...</p></IonText> 
          </IonList>
        </IonItem>
        
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Mukhtar Hassan</h6>
          <IonText color="medium">  <p>You will remove these restraints and leave...</p></IonText> 
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Hasina Hassan</h6>
          <IonText color="medium"> <p>I feel the good in you, the conflict...</p></IonText> 
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Jane Doe</h6>
          <IonText color="medium">  <p>I just upgraded my X-Wing. Next time...</p></IonText> 
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>John Doe</h6>
          <IonText color="medium">  <p>These aren't the droids you're looking for...</p></IonText> 
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Karima Dbt</h6>
          <IonText color="medium">  <p>I've placed information vital to the survival...</p></IonText> 
          </IonList>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
          </IonAvatar>
          <IonList>
            <h6>Sadiq Hassan</h6>
          <IonText color="medium">   <p>Do or do not. There is no try...</p></IonText> 
          </IonList>
        </IonItem>
        
      </IonList>
    </div>
  );
};

export default Chat;
