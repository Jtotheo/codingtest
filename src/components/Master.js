import { IonHeader } from "@ionic/react";
import { React, useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { Detailed } from "./Detailed.js";

export function Master() {
  // Använder useState-hooken för att cacha data från API
  const [shopItems, setShopItems] = useState([]);

  // useEffect kör en fetch och uppdaterar shopItems med en ny array, som filterats ut shoppingItem från API-svaret.
  useEffect(() => {
    const fetchData = async () => {
      const responded = await fetch(
        "https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads"
      ).then((res) => res.json());

      setShopItems(
        responded.space.content.filter((post, ind) => {
          return post.shoppingItem;
        })
      );
    };
    fetchData();
  }, []);

  // Här "mappas" shopItems (array) och så returneras:
  // 1) html-element som görs till länkar som referar till respektive shoppingItem-Id som parameter
  // 2) Component "Detailed" körs för respektive "params:id", "Detailed" tar in "params:id" i sin fetch (se "Detailed.js").

  const cards = shopItems.map((post, ind) => {
    return (
      <div key={post.shoppingItem.id} id={post.shoppingItem.id}>
        <div className="card">
          <Link to={"/" + post.shoppingItem.id}>
            {/* I p-elementet nedan returneras "/månad" respektive "/år" beroende på 
                    respektive betalningsperiod för det aktuella shoppingItem, */}
            <p className="price">
              {"SEK" + post.shoppingItem.price[0].value}
              {post.shoppingItem.description_en === "Billed monthly"
                ? " /månad"
                : " /år"}
            </p>
            <p className="type">{post.shoppingItem.description} </p>
            <p className="name"> {post.shoppingItem.name}</p>
          </Link>
        </div>
      </div>
    );
  });

  // Component "Master.js" returnerar nedan till "App.js": "cards" som mappats ovan, och en header.
  return (
    <>
      <IonHeader
        style={{
          height: "10rem",
          background:
            "url(https://lh3.googleusercontent.com/spouK5WR8qLf9ptkXJd0x4zdZc7mQ3PsMWewlb50hPXOFcuNb9ZTbEqimwNa0n4LK7aMyo4uPWh456cWSO8kAYNi=s200-c)",
          backgroundSize: "100%",
          paddingLeft: "1rem",
          color: "lightblue",
          paddingTop: "1rem",
          fontSize: "2rem",
        }}
      >
        WINNERHEADS MARKETPLACE
      </IonHeader>
      {/* Gör en route så att variablen "cards" som sätts ovan renderas på rot-url */}
      <Route exact path="/codingtest">
        <div className="container">{cards}</div>
      </Route>
      <Route path={`/:id`}>
        {/* Component "Detailed" körs för respektive url med param:id */}
        <Detailed />
      </Route>
    </>
  );
}
