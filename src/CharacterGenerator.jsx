import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

// Example random generation functions
const randomName = () => ['Aragorn', 'Legolas', 'Gimli'][Math.floor(Math.random() * 3)];
const randomBackground = () => ['Farmer', 'Noble', 'Soldier'][Math.floor(Math.random() * 3)];
const roll3d6 = () => Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;

const calculateModifier = (score) => Math.floor((score - 10) / 2);

const CharacterGenerator = () => {
  const [name, setName] = useState(randomName());
  const [title, setTitle] = useState('');
  const [faith, setFaith] = useState('');
  const [background, setBackground] = useState(randomBackground());
  
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

  const faithOptions = ['God of War', 'God of Knowledge', 'God of Nature'];

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

      {/* Title Bar */}
      <Grid item xs={12}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </Grid>

      {/* Faith Dropdown */}
      <Grid item xs={12}>
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

      {/* Background */}
      <Grid item xs={12}>
        <TextField
          label="Background"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          fullWidth
        />
      </Grid>

      {/* Ability Scores */}
      {[
        { label: 'Strength', value: strength, setter: setStrength },
        { label: 'Dexterity', value: dexterity, setter: setDexterity },
        { label: 'Agility', value: agility, setter: setAgility },
        { label: 'Constitution', value: constitution, setter: setConstitution },
        { label: 'Wits', value: wits, setter: setWits },
        { label: 'Intelligence', value: intelligence, setter: setIntelligence },
        { label: 'Willpower', value: willpower, setter: setWillpower },
        { label: 'Charisma', value: charisma, setter: setCharisma }
      ].map((stat, index) => (
        <Grid item xs={6} key={index}>
          <TextField
            label={stat.label}
            value={stat.value}
            onChange={(e) => stat.setter(parseInt(e.target.value) || 0)}
            fullWidth
          />
        </Grid>
      ))}

      {/* Hit Points */}
      <Grid item xs={12}>
        <TextField
          label="Hit Points"
          value={hitPoints}
          InputProps={{ readOnly: true }}
          fullWidth
        />
      </Grid>

      {/* Defense */}
      <Grid item xs={12}>
        <TextField
          label="Defense"
          value={defense}
          InputProps={{ readOnly: true }}
          fullWidth
        />
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
        }}>
          Generate New Character
        </Button>
      </Grid>
    </Grid>
  );
};

export default CharacterGenerator;
