"use client";

import Snowfall from "react-snowfall";

export default function Snow() {
  return (
    <Snowfall speed={[1,1]} color="#f1f1f1" snowflakeCount={7} opacity={[1,1]}/>
  );
}