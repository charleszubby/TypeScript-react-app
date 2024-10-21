import React from "react";

interface GreetingProps {
  name: string;
  message: string;
}
const Greeting: React.FC<GreetingProps> = ({ name, message }) => {
  return <div>Hello! {name}</div>;
};
export default Greeting;
