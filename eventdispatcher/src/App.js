import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
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
  let allProcess = [];
  var isEmpty = false;

  var lastMicro = 0;

  const classes = useStyles();
  var lowest;
  var highest;
  var highestMicro;
  var lowestMicro;
  var microToAsign;
  var Name;
  var TCC;
  var TF;
  var TVC;
  var TE;
  var TB;
  var TT;
  var TI;
  var TF;

  var totalTime = 0;

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

    let allMicros = [];
    for(let i = 0; i < num; i++){
      allMicros[i] = [[0,0,0,0,0,0,0,0]];
    }
    console.table(allMicros);
    for (let i = 0; i < premade.length; i++) {
      let allAvailable = true;
      for(let k = 0; k < num ; k++){
        if(premade[i][3] < allMicros[k][allMicros[k].length - 1][7]){
          allAvailable = false;
        } 
      }
      if (!allAvailable){
        for (let j = 0; j < num; j++) {
          if(num == 1){
            break;
          }
          if (i == 0) {
           break;
 
         }
          if (allMicros[j][allMicros[j].length - 1][7] < lowest){
             lowest = allMicros[j][allMicros[j].length - 1][7];
             lowestMicro = j;
             microToAsign = lowestMicro;
         } else if(allMicros[j][allMicros[j].length - 1][7] > highest){
             highest = allMicros[j][allMicros[j].length - 1][7]
             highestMicro = j;
             
         }
        }
      }else {
        for (let k = 0; k< num; k++){
          if (premade[i][3] > allMicros[k][allMicros[k].length - 1][7]){
            microToAsign = k;
            break;
          }
        }
      }
      
        
       
     
      
      console.log(highest);
      console.log(lowestMicro);

      //Calcular nombre
      Name = premade[i][0]

      // Calcular TCC

      if (i == 0) {
        TCC = 0;
      } else if (premade[i][3] >= allMicros[lowestMicro][allMicros[lowestMicro].length - 1][7]) {
        TCC = 0;
      } else if (premade[i][3] < allMicros[lowestMicro][allMicros[lowestMicro].length - 1][7]) {
        TCC = time;
      } else {
        TCC = "Error"
      }

      //Calcular TE

      TE = premade[i][1]

      //Calcular TVC

      TVC = (Math.ceil(parseInt(premade[i][1]) / quantum) - 1) * time;

      //Calcular TB

      TB = parseInt(premade[i][2]) * block

      //Calcular TT

      TT = TCC + TE + TVC + TB;

      //Calcular TI
      if (i == 0) {
        TI = 0;
      } else if (premade[i][3] > allMicros[lowestMicro][allMicros[lowestMicro].length - 1][7]) {
        TI = premade[i][3];
      } else {
        TI = allMicros[lowestMicro][allMicros[lowestMicro].length - 1][7];
      }


      //Calcular TF

      TF = TT + TI;

      totalTime = TF;

      

      var currentProcess = [Name, TCC, TE, TVC, TB, TT, TI, TF];

      allProcess.push(currentProcess);

      if (i == 0) {
        allMicros[0] = [currentProcess];
        lowest = currentProcess[7];
        highest = currentProcess[7];
        lowestMicro = 0;
      }
      else if (allAvailable){
        allMicros[microToAsign].push(currentProcess);
      }else{
        allMicros[microToAsign].push(currentProcess);
        lowest = allMicros[lowestMicro][allMicros[lowestMicro].length - 1][7]
      }
      
      //console.log(allMicros)


    
    }
    // var aaa = ["Name", "TCC", "TE", "TVC", "TB", "TT", "TI", "TF"];
    // allMicros[0].push(aaa);

    // console.table(premade);
    if (num == 1){
      console.table(allProcess);
    }else{
      console.table(allMicros);
    }
    
    
  };

  let isNum = false;


  return (<
        form className={
      classes.root
    }
    noValidate autoComplete="off" >

    <
        FormControl variant="outlined"
      className={
        classes.formControl
      } >
      <
        InputLabel id="demo-simple-select-label" > Microprocesadores < /InputLabel> <
        Select labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={
            num
          }
          onChange={
            handleNumChange
          } >
          <
        MenuItem value={
              1
            } > 1 < /MenuItem> <
        MenuItem value={
                2
              } > 2 < /MenuItem> <
        MenuItem value={
                  3
                } > 3 < /MenuItem> <
        MenuItem value={
                    4
                  } > 4 < /MenuItem> <
        MenuItem value={
                      5
                    } > 5 < /MenuItem> <
        MenuItem value={
                        6
                      } > 6 < /MenuItem> <
        MenuItem value={
                          7
                        } > 7 < /MenuItem> <
        MenuItem value={
                            8
                          } > 8 < /MenuItem> <
        MenuItem value={
                              9
                            } > 9 < /MenuItem> <
        /Select> <
        /FormControl>

        {
            /* <TextField required id="outlined-basic" label="Microprocesadores" variant="outlined" /> */} <
                              TextField required error={
                                isNum
                              }
                              id="outlined-basic"
                              value={
                                quantum
                              }
                              onChange={
                                handleQuantumChange
                              }
                              label="Quantums"
                              variant="outlined" />
                            <
                              TextField required id="outlined-basic"
                              value={
                                block
                              }
                              onChange={
                                handleBlockChange
                              }
                              label="Bloqueo"
                              variant="outlined" />
                            <
                              TextField required id="outlined-basic"
                              value={
                                time
                              }
                              onChange={
                                handleTimeChange
                              }
                              label="Cambio"
                              variant="outlined" />
                            <
        Button variant="outlined"
                              onClick={
                                handleClick
                              } > Calcular < /Button> <
        /form>
    );
};