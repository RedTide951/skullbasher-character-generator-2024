import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Example random generation functions
const randomName = () =>
  [
    "Bob",
    "Mark",
    "Zoe",
    "Hilde",
    "Torbin",
    "Marga",
    "Bruno",
    "Karina",
    "Naugrim",
    "Brenna",
    "Darvin",
    "Elga",
    "Alric",
    "Isolde",
    "Gendry",
    "Bruga",
    "Junnor",
    "Vidrid",
    "Torson",
    "Brielle",
    "Ulfgar",
    "Sarna",
    "Grimm",
    "Eliara",
    "Ryarn",
    "Sariel",
    "Tirolas",
    "Galira",
    "Varos",
    "Daeniel",
    "Axidor",
    "Hiralia",
    "Cyrwin",
    "Lothiel",
    "Zaphiel",
    "Nayra",
    "Ithior",
    "Amriel",
    "Elyon",
    "Jirwyn",
    "Natinel",
    "Fiora",
    "Ruhiel",
    "Iggs",
    "Tark",
    "Nix",
    "Lenk",
    "Roke",
    "Fitz",
    "Tila",
    "Riggs",
    "Prim",
    "Zeb",
    "Finn",
    "Borg",
    "Yark",
    "Deeg",
    "Nibs",
    "Brak",
    "Fink",
    "Rizzo",
    "Squib",
    "Grix",
    "Willow",
    "Benny",
    "Annie",
    "Tucker",
    "Marie",
    "Hobb",
    "Cora",
    "Gordie",
    "Rose",
    "Ardo",
    "Alma",
    "Norbert",
    "Jennie",
    "Barvin",
    "Tilly",
    "Pike",
    "Lydia",
    "Marlow",
    "Astrid",
    "Jasper",
    "Vara",
    "Gralk",
    "Ranna",
    "Korv",
    "Zasha",
    "Hrogar",
    "Klara",
    "Tragan",
    "Brolga",
    "Drago",
    "Yelena",
    "Krull",
    "Ulara",
    "Tulk",
    "Shiraal",
    "Wulf",
    "Ivara",
    "Hirok",
    "Aja",
    "Zoraan",
    "Zali",
    "Bram",
    "Clara",
    "Nattias",
    "Rina",
    "Denton",
    "Mirena",
    "Aran",
    "Morgan",
    "Giralt",
    "Tamra",
    "Oscar",
    "Ishana",
    "Rogar",
    "Jasmin",
    "Tarin",
    "Yuri",
    "Malchor",
    "Lienna",
    "Godfrey",
  ][Math.floor(Math.random() * 120)];

const randomBackground = () =>
  ["Farmer", "Noble", "Soldier"][Math.floor(Math.random() * 3)];

const roll3d6 = () =>
  Math.floor(Math.random() * 6) +
  1 +
  Math.floor(Math.random() * 6) +
  1 +
  Math.floor(Math.random() * 6) +
  1;

const calculateModifier = (score) => Math.floor((score - 10) / 2);

const classOptions = [
  "Warrior",
  "Cleric",
  "Wizard",
  "Thief",
  "Witch",
  "Bard",
  "Ranger",
  "Crusader",
  "Tinkerer",
  "Druid",
  "Warlock",
];
const classInfo = {
  Warrior:
    "Blood-soaked gladiators in dented armor, who carve their legends with steel and grit.",
  Cleric: "Devout healers, serving the divine.",
};

const faithOptions = [
  "St. Terragnis",
  "Ord The Wise",
  "Gede",
  "Madeera The Covenant",
  "Shune The Vile",
  "Raamlat The Pillager",
  "Memnon",
  "The Lost",
];

const faithInfo = {
  "St. Terragnis":
    "A legendary knight who is the patron of most lawful humans. She ascended to godhood long ago and is the embodiment of righteousness and justice.",
  "Ord The Wise":
    "Ord the Unbending, the Wise, the Secret-Keeper. He is the god of magic, knowledge, secrets, and equilibrium.",
  Gede: "The god of feasts, mirth, and the wilds. Gede is usually peaceful, but primal storms rage when her anger rises. Many elves and halflings worship her.",
  "Madeera The Covenant":
    "Madeera was the first manifestation of Law. She carries every law of reality, a dictate called the Covenant, written on her skin in precise symbols.",
  "Shune The Vile":
    "Shune whispers arcane secrets to sorcerers and witches who call to her in the dark hours. She schemes to displace Ord so she can control the vast flow of magic herself.",
  "Raamlat The Pillager":
    "Ramlaat is the Pillager, the Barbaric, the Horde. Many orcs worship him and live by the Blood Rite, a prophecy that says only the strongest will survive a coming doom.",
  Memnon:
    "Memnon was the first manifestation of Chaos. He is Madeera’s twin, a red-maned, leonine being whose ultimate ambition is to rend the cosmic laws of the Covenant from his sister’s skin.",
  "The Lost":
    "Two of The Nine are lost to the ages, their names expunged from history and memory. Yet their whispered legend lives on in ancient texts and forgotten places...",
  // Add similar descriptions for other faiths
};

const CharacterGenerator = () => {
  const [name, setName] = useState(randomName());
  const [title, setTitle] = useState("");
  const [faith, setFaith] = useState("");
  const [background, setBackground] = useState(randomBackground());
  const [characterClass, setCharacterClass] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [faithDescription, setFaithDescription] = useState("");

  // Ability Scores
  const [strength, setStrength] = useState(roll3d6());
  const [dexterity, setDexterity] = useState(roll3d6());
  const [agility, setAgility] = useState(roll3d6());
  const [constitution, setConstitution] = useState(roll3d6());
  const [wits, setWits] = useState(roll3d6());
  const [intelligence, setIntelligence] = useState(roll3d6());
  const [willpower, setWillpower] = useState(roll3d6());
  const [charisma, setCharisma] = useState(roll3d6());

  const hitPoints = Math.max(
    1,
    Math.floor(Math.random() * 6) +
      1 +
      calculateModifier(constitution) +
      Math.max(calculateModifier(willpower), 0)
  );
  const defense = 10 + calculateModifier(agility);

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setCharacterClass(selectedClass);
    setClassDescription(classInfo[selectedClass] || "");
  };

  const handleFaithChange = (event) => {
    const selectedFaith = event.target.value;
    setFaith(selectedFaith);
    setFaithDescription(faithInfo[selectedFaith] || "");
  };

  return (
    <Grid container spacing={2} padding={1}>
      {/* Character Name */}
      <Grid item xs={12}>
        <TextField
          label="Character Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </Grid>

      {/* Title and Background */}
      <Grid item xs={6}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Background"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          fullWidth
        />
      </Grid>

      {/* Class Dropdown with handler */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="class-label">Class</InputLabel>
          <Select
            labelId="class-label"
            value={characterClass}
            onChange={handleClassChange} // Updated to use the handler
          >
            {classOptions.map((classOption, index) => (
              <MenuItem key={index} value={classOption}>
                {classOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Faith Dropdown with handler */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="faith-label">Faith</InputLabel>
          <Select
            labelId="faith-label"
            value={faith}
            onChange={handleFaithChange} // Updated to use the handler
          >
            {faithOptions.map((god, index) => (
              <MenuItem key={index} value={god}>
                {god}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Information on selected class */}
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Caslon Antique",
                fontSize: "0.7em",
                textAlign: "Left",
              }}
            >
              {classDescription}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Information on selected faith */}
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Caslon Antique",
                fontSize: "0.7em",
                textAlign: "Left",
              }}
            >
              {faithDescription}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Hit Points and defense */}

      <Grid item xs={6}>
        <TextField
          label="Hit Points"
          value={hitPoints}
          InputProps={{ readOnly: true }}
          fullWidth
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Defense"
          value={defense}
          InputProps={{ readOnly: true }}
          fullWidth
        />
      </Grid>

      {/* Ability Scores */}
      {[
        { label: "Strength", value: strength, setter: setStrength },
        { label: "Dexterity", value: dexterity, setter: setDexterity },
        { label: "Agility", value: agility, setter: setAgility },
        { label: "Constitution", value: constitution, setter: setConstitution },
        { label: "Wits", value: wits, setter: setWits },
        { label: "Intelligence", value: intelligence, setter: setIntelligence },
        { label: "Willpower", value: willpower, setter: setWillpower },
        { label: "Charisma", value: charisma, setter: setCharisma },
      ].map((stat, index) => (
        <Grid item xs={3} key={index}>
          <TextField
            label={stat.label}
            value={`${stat.value} (${
              calculateModifier(stat.value) >= 0
                ? `+${calculateModifier(stat.value)}`
                : calculateModifier(stat.value)
            })`}
            onChange={(e) => stat.setter(parseInt(e.target.value) || 0)}
            fullWidth
            InputProps={{
              readOnly: true, // This makes the field not editable
            }}
          />
        </Grid>
      ))}

      {/* Generate New Character */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setName(randomName());
            setBackground(randomBackground());
            setStrength(roll3d6());
            setDexterity(roll3d6());
            setAgility(roll3d6());
            setConstitution(roll3d6());
            setWits(roll3d6());
            setIntelligence(roll3d6());
            setWillpower(roll3d6());
            setCharisma(roll3d6());
            setFaith(
              faithOptions[Math.floor(Math.random() * faithOptions.length)]
            );
            setCharacterClass(
              classOptions[Math.floor(Math.random() * classOptions.length)]
            );
          }}
        >
          Generate New Character
        </Button>
      </Grid>
    </Grid>
  );
};

export default CharacterGenerator;
