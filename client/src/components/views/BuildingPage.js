import React from "react";
import Card from "./Card";

export default function OrderPage(props) {
  const eventsList = props.data.map((event) => <Card {...event} />);

  return <div>{eventsList}</div>;
}
