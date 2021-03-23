import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProfileCard
        data={{
          name: "HSSAINI ABDESSAMAD",
          posts: "D4M45",
          bio:
            "Hello 👋, my name is Abdessamad. Software Engineer Student at ENSA & 1337 KHOURIBGA, focusing on Web Dev technologies.",
          location: "KHOURIBGA, MOROCCO",
          technologies: [
            "Javascript",
            "React",
            
          ],
          creationDate: "https://github.com/A-hssaini",
        }}
      />
    </div>
  );
}
