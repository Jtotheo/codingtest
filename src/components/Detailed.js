import { React, useState, useEffect } from "react";
import { IonButton, IonCard, IonItem } from "@ionic/react";
import { useParams } from "react-router";

export function Detailed() {
  // Använder useState-hooken för att cacha data från API,
  // med "params:id" = shoppingItem-Id, se "Master.js"
  const [detInfo, setDetInfo] = useState([]);
  // Sätter key id till "Route:param"
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.winnerheads.com/api/shopitems/${id}`
      ).then((res) => res.json());

      setDetInfo(
        response.promoSpace.content.map((el) => {
          return el;
        })
      );
    };
    fetchData();
  }, [id]);

  // För för att kunna köra Reacts "dangerouslySetInnerHTML" sparas html-strängen
  // från beskrivningen i API-data till en variabel "htmlString"
  const htmlString = detInfo.map((e) => {
    return e.description;
  });

  // detInfo (array) mappas och data returneras.
  const returnedData = detInfo.map((e, ind) => {
    return (
      <IonItem key={ind}>
        <IonCard key="ind" className="detailed">
          <a className="backButton" href="/" style={{ float: "right" }}>
            <IonButton>Kassa</IonButton>
          </a>
          <h3>{e.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        </IonCard>
      </IonItem>
    );
  });

  // Component "Detailed.js" returnerar den mappade datan till "Master.js"
  return <div>{returnedData}</div>;
}
