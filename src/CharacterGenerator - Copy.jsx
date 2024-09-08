import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

// Random generation functions and options
const randomName = () => ['Bob', 'Mark', 'Zoe', 'Hilde', 'Torbin', 'Marga', 'Bruno', 'Karina', 'Naugrim', 'Brenna', 'Darvin', 'Elga', 'Alric', 'Isolde', 'Gendry', 'Bruga', 'Junnor', 'Vidrid', 'Torson', 'Brielle', 'Ulfgar', 'Sarna', 'Grimm', 'Eliara', 'Ryarn', 'Sariel', 'Tirolas', 'Galira', 'Varos', 'Daeniel', 'Axidor', 'Hiralia', 'Cyrwin', 'Lothiel', 'Zaphiel', 'Nayra', 'Ithior', 'Amriel', 'Elyon', 'Jirwyn', 'Natinel', 'Fiora', 'Ruhiel', 'Iggs', 'Tark', 'Nix', 'Lenk', 'Roke', 'Fitz', 'Tila', 'Riggs', 'Prim', 'Zeb', 'Finn', 'Borg', 'Yark', 'Deeg', 'Nibs', 'Brak', 'Fink', 'Rizzo', 'Squib', 'Grix', 'Willow', 'Benny', 'Annie', 'Tucker', 'Marie', 'Hobb', 'Cora', 'Gordie', 'Rose', 'Ardo', 'Alma', 'Norbert', 'Jennie', 'Barvin', 'Tilly', 'Pike', 'Lydia', 'Marlow', 'Astrid', 'Jasper', 'Vara', 'Gralk', 'Ranna', 'Korv', 'Zasha', 'Hrogar', 'Klara', 'Tragan', 'Brolga', 'Drago', 'Yelena', 'Krull', 'Ulara', 'Tulk', 'Shiraal', 'Wulf', 'Ivara', 'Hirok', 'Aja', 'Zoraan', 'Zali', 'Bram', 'Clara', 'Nattias', 'Rina', 'Denton', 'Mirena', 'Aran', 'Morgan', 'Giralt', 'Tamra', 'Oscar', 'Ishana', 'Rogar', 'Jasmin', 'Tarin', 'Yuri', 'Malchor', 'Lienna', 'Godfrey'][Math.floor(Math.random() * 120)];
const randomBackground = () => ['Farmer', 'Noble', 'Soldier'][Math.floor(Math.random() * 3)];
const roll3d6 = () => Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
const calculateModifier = (score) => Math.floor((score - 10) / 2);

const classOptions = ['Warrior', 'Cleric', 'Wizard', 'Thief', 'Witch', 'Bard', 'Ranger', 'Crusader', 'Tinkerer', 'Druid', 'Warlock'];
const faithOptions = ['St. Terragnis', 'Ord The Wise', 'Gede', 'Madeera The Covenant', 'Shune The Vile', 'Raamlat The Pillager', 'The Lost'];

const CharacterGenerator = () => {
  const [name, setName] = useState(randomName());
  const [title, setTitle] = useState('');
  const [faith, setFaith] = useState('');
  const [background, setBackground] = useState(randomBackground());
  const [characterClass, setCharacterClass] = useState('');
  
  // Ability Scores
  const [strength, setStrength] = useState(roll3d6());
  const [dexterity, setDexterity] = useState(roll3d6());
  const [agility, setAgility] = useState(roll3d6());
  const [constitution, setConstitution] = useState(roll3d6());
  const [wits, setWits] = useState(roll3d6());
  const [intelligence, setIntelligence] = useState(roll3d6());
  const [willpower, setWillpower] = useState(roll3d6());
  const [charisma, setCharisma] = useState(roll3d6());

  const hitPoints = Math.floor(Math.random() * 6) + 1 + calculateModifier(constitution) + Math.max(calculateModifier(willpower), 0);
  const defense = 10 + calculateModifier(agility);

  return (
    <Grid container spacing={2}>

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
      <Grid container spacing={2}>
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
      </Grid>

      {/* Class and Faith Dropdowns */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="class-label">Class</InputLabel
            <Select
              labelId="class-label"
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
            >
              {classOptions.map((classOption, index) => (
                <MenuItem key={index} value={classOption}>
                  {classOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="faith-label">Faith</InputLabel>
            <Select
              labelId="faith-label"
              value={faith}
              onChange={(e) => setFaith(e.target.value)}
            >
              {faithOptions.map((god, index) => (
                <MenuItem key={index} value={god}>
                  {god}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Ability Scores */}
      <Grid container spacing={2}>
        {[
          { label: 'Strength', value: strength },
          { label: 'Dexterity', value: dexterity },
          { label: 'Agility', value: agility },
          { label: 'Constitution', value: constitution },
          { label: 'Wits', value: wits },
          { label: 'Intelligence', value: intelligence },
          { label: 'Willpower', value: willpower },
          { label: 'Charisma', value: charisma }
        ].map((stat, index) => (
          <Grid item xs={6} key={index}>
            <TextField
              label={stat.label}
              value={`${stat.value} (${calculateModifier(stat.value) >= 0 ? `+${calculateModifier(stat.value)}` : calculateModifier(stat.value)})`}
              fullWidth
              InputProps={{
                readOnly: true, // This makes the field not editable
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Hit Points and Defense */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Hit Points"
            value={hitPoints}
            InputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Defense"
            value={defense}
            InputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Generate New Character */}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={() => {
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
          setFaith(faithOptions[Math.floor(Math.random() * faithOptions.length)]);
          setCharacterClass(classOptions[Math.floor(Math.random() * classOptions.length)]);
        }}>
          Generate New Character
        </Button>
      </Grid>
    </
  