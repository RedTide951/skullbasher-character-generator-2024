import React from 'react'
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';
import CharacterGenerator from './CharacterGenerator';

const Casing = () => {
  return (
    <Grid padding={2}>
        <CharacterGenerator />
    </Grid>
  )
}

export default Casing