import logo from "./logo.svg";
import React from "react";
import "./App.css";
import TabNav from "./Component/TabNav";
import Header from "./Component/Header";
import Card from "./Component/Card";
import { checkUpcoming, checkPast } from "./Component/Utils";

function App() {
  const [selectedTab, setSelectedTab] = React.useState("Nearest rides");
  const [rideData, setRideData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const getuserData = async () => {
    const response = await fetch("https://assessment.api.vweb.app/user");
    const myJson = await response.json();
    setUserData(myJson);
  };
  const getData = async () => {
    const response = await fetch("https://assessment.api.vweb.app/rides");
    const myJson = await response.json();
    setRideData(myJson);
  };

  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
    getuserData();
  }, []);

  const UserStatinCode = userData["station_code"];
  const Username = userData["name"];
  const Userpic = userData["url"];
  var ridesToBeShown = {};
  if (selectedTab === "Nearest rides") {
    for (let i = 0; i < rideData.length; i++) {
      let key = Math.abs(UserStatinCode - rideData[i]["origin_station_code"]);
      ridesToBeShown[key] = rideData[i];
    }
  } else if (selectedTab == "Upcoming rides") {
    ridesToBeShown = rideData.filter(checkUpcoming);
  } else {
    ridesToBeShown = rideData.filter(checkPast);
  }

  var upcommingRideCount = rideData.filter(checkUpcoming).length;
  var pastRideCount = rideData.filter(checkPast).length;

  return (
    <div>
      <Header url={Userpic} name={Username} />
      <TabNav
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        upcommingRideCount={upcommingRideCount}
        pastRideCount={pastRideCount}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {ridesToBeShown !== {} &&
          Object.keys(ridesToBeShown).map((distance, ind) => {
            return (
              <Card
                rideDetails={ridesToBeShown[distance]}
                key={ind}
                distance={distance}
                count={ridesToBeShown.length}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
