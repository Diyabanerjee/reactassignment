import React from "react";
import "./Card.css";

export default function Card({ rideDetails, distance }) {
  return (
    <div
      className="Card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="cardcss">
          <img width={"296px"} height={"148px"} src={rideDetails.map_url}></img>
        </div>
        <div className="cardtext">
          <p>Ride Id : {rideDetails["id"]}</p>
          <p style={styles.p1}>
            Origin Station : {rideDetails.origin_station_code}
          </p>
          <p style={styles.p1}>Station-path : {[rideDetails.station_path]}</p>
          <p style={styles.p1}>Date : {rideDetails.date}</p>
          <p style={styles.p1}>Distance : {distance}</p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "black",
          flexDirection: "-moz-initial",
          float: "right",
          display: "flex",
          textAlign: "end",
          border: "10px",
          alignSelf: "baseline",
          borderRadius: "5px",
        }}
      >
        <p style={{ color: "white", marginRight: "10px" }}>
          {rideDetails.state}{" "}
        </p>
        <p style={{ color: "white" }}>{rideDetails.city}</p>
      </div>
    </div>
  );
}

const styles = {
  p1: { marginTop: "-5%" },
};
