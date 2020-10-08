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

  var B = ['B', 300, 2, 0];
  var D = ['D', 100, 2, 0];
  var F = ['F', 500, 3, 0];
  var H = ['H', 700, 4, 0];
  var J = ['J', 300, 2, 1500];
  var L = ['L', 3000, 5, 1500];
  var N = ['N', 50, 2, 1500];
  var O = ['O', 600, 3, 1500];
  var A = ['A', 400, 2, 3000];
  var C = ['C', 50, 2, 3000];
  var E = ['E', 1000, 5, 3000];
  var G = ['G', 10, 2, 3000];
  var I = ['I', 450, 3, 3000];
  var K = ['K', 100, 2, 4000];
  var M = ['M', 80, 2, 4000];
  var P = ['P', 800, 4, 4000];
  var NN = ['NN', 500, 3, 8000];

  let premade = [
    B,
    D,
    F,
    H,
    J,
    L,
    N,
    O,
    A,
    C,
    E,
    G,
    I,
    K,
    M,
    P,
    NN
  ];

  var isEmpty = false;

  const classes = useStyles();


  const [num, setNum] = React.useState('');
  const [quantum, setQuantum] = React.useState('');
  const [block, setBlock] = React.useState('');
  const [time, setTime] = React.useState('');


  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  const handleQuantumChange = (event) => {
    setQuantum(parseInt(event.target.value));
  };

  const handleBlockChange = (event) => {
    setBlock(parseInt(event.target.value));
  };

  const handleTimeChange = (event) => {
    setTime(parseInt(event.target.value));
  };

  const handleClick = (event) => {
    console.table(premade);

    //Calcular nombre
    for (let index = 0; index < premade.length; index++) {
      var Name = premade[i][0]
    }
    // Calcular TCC
    //Calcular TE

    for (let index = 0; index < premade.length; index++) {
      var TE = premade[i][1]
    }
    //Calcular TVC
    //Calcular TB
    //Calcular TT
    //Calcular TI
    //Calcular TF



  };

  let isNum = false;


  return (
    <form className={classes.root} noValidate autoComplete="off">

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Microprocesadores</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={num}
          onChange={handleNumChange}
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

      {/* <TextField required id="outlined-basic" label="Microprocesadores" variant="outlined" /> */}
      <TextField required error={isNum} id="outlined-basic" value={quantum} onChange={handleQuantumChange} label="Quantums" variant="outlined" />
      <TextField required id="outlined-basic" value={block} onChange={handleBlockChange} label="Bloqueo" variant="outlined" />
      <TextField required id="outlined-basic" value={time} onChange={handleTimeChange} label="Cambio" variant="outlined" />
      <Button variant="outlined" onClick={handleClick}>Calcular</Button>
    </form>
  );
};