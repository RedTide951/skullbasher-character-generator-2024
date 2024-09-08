import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import CharacterGenerator from "./CharacterGenerator";

const Casing = () => {
  return (
    <div className="casing-container">
      <Grid container>
        <audio autoPlay loop hidden>
          <source src="/LauraReprise.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <img
          src="/Skullbanner.png"
          alt="Character Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <CharacterGenerator />
      </Grid>
    </div>
  );
};

export default Casing;
