import React from "react";

import "./Nav.css";

export default function TabNav({
  setSelectedTab,
  selectedTab,
  pastRideCount,
  upcommingRideCount,
}) {
  return (
    <div>
      <div className="nav">
        <p
          style={{
            borderBottom:
              selectedTab === "Nearest rides" ? "3px solid white" : "",
          }}
          onClick={() => setSelectedTab("Nearest rides")}
        >
          Nearest rides
        </p>
        <p
          style={{
            borderBottom:
              selectedTab === "Upcoming rides" ? "3px solid white" : "",
          }}
          onClick={() => setSelectedTab("Upcoming rides")}
        >
          Upcoming rides({upcommingRideCount})
        </p>
        <p
          style={{
            borderBottom: selectedTab === "Past rides" ? "3px solid white" : "",
          }}
          onClick={() => setSelectedTab("Past rides")}
        >
          Past rides({pastRideCount})
        </p>
      </div>
    </div>
  );
}
