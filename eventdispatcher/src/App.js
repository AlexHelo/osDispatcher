import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [num, setNum] = React.useState('');

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Microprocesadores</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={num}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>
      <TextField required id="outlined-basic" label="Quantums" variant="outlined" />
      <TextField required id="outlined-basic" label="Bloqueo" variant="outlined" />
      <TextField required id="outlined-basic" label="Cambio" variant="outlined" />
      <Button variant="outlined">Calcular</Button>
    </form>
  );
}