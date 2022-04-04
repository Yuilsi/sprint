
const uploadData_btn = document.getElementById('uploadData_btn');
const line1A_btn = document.getElementById('line1A_btn');
const line1D_btn = document.getElementById('line1D_btn');
const line2A_btn = document.getElementById('line2A_btn');
const line2D_btn = document.getElementById('line2D_btn');
const line3A_btn = document.getElementById('line3A_btn');
const line3D_btn = document.getElementById('line3D_btn');
const line4A_btn = document.getElementById('line4A_btn');
const line4D_btn = document.getElementById('line4D_btn');
const line5A_btn = document.getElementById('line4A_btn');
const line5D_btn = document.getElementById('line5D_btn');


const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');

const order = document.getElementById('order');
let doc = document.getElementById('csv');
let dataBase = [];
let dataBaseSplited = [];
let array = [];
let arrayData = [];
let init;

//----------------------- Carga la base de datos-------------------------------
function setup() {
  this.dataBase = loadStrings("./basededatos.csv");
}


function draw() {
  if (init) {
    question1.classList.remove('covered');
    question2.classList.remove('covered');
    question3.classList.remove('covered');
    question4.classList.remove('covered');
    question5.classList.remove('covered');
    

    line1A_btn.classList.remove('covered');
    line1D_btn.classList.remove('covered');
    line2D_btn.classList.remove('covered');
    line2A_btn.classList.remove('covered');
    line3D_btn.classList.remove('covered');
    line3A_btn.classList.remove('covered');
    line4D_btn.classList.remove('covered');
    line4A_btn.classList.remove('covered');
    line5D_btn.classList.remove('covered');
    line5A_btn.classList.remove('covered');

    for (let i = 0; i < this.dataBase.length; i++) {
      this.dataBaseSplited = this.dataBase[i].split(",");
      array[i] = this.dataBaseSplited;
    }

    //-----------------------  Ordenar los filas dependiendo los valores-----------------------------------------------
    for (let j = 0; j < array.length; j++) {
      let obj = {
        Nombre: array[j][0],
       line_1: parseInt(array[j][1]),
       line_2: parseInt(array[j][2]),
       line_3: parseInt(array[j][3]),
       line_4: parseInt(array[j][4]),
       line_5: parseInt(array[j][5])

      }
      arrayData[j] = obj;
    }
    console.log(arrayData);
    init = false;

  }
}
function uploadData() {
  init = true;
}

//-----------------------  Ordenar filas de mayor a menor y viceversa-----------------------------------------------
// FILA 1
function filterRow1Asc() {
  arrayData.sort((function (a, b) {
    if (a.line_1 > b.line_1) {
      return 1;
    }
    if (a.line_1 < b.line_1) {
      return -1;
    }
    return 0;
  }));
  console.log(arrayData);
}

function filterRow1Des() {
  arrayData.sort((function (a, b) {
    if (a.line_1 > b.line_1) {
      return -1;
    }
    if (a.line_1 < b.line_1) {
      return 1;
    }
    return 0;
  }));
  console.log(arrayData);
}

// FILA 2
function filterRow2Asc() {
  arrayData.sort((function (a, b) {
    if (a.line_2 > b.line_2) {
      return 1;
    }
    if (a.line_2 < b.line_2) {
      return -1;
    }
    return 0;
  }));
  console.log(arrayData);
}

function filterRow2Des() {
  arrayData.sort((function (a, b) {
    if (a.line_2 > b.line_2) {
      return -1;
    }
    if (a.line_2 < b.line_2) {
      return 1;
    }
    return 0;
  }));
  console.log(arrayData);

}

uploadData_btn.addEventListener('click', uploadData);
line1A_btn.addEventListener('click', filterRow1Asc);
line1D_btn.addEventListener('click', filterRow1Des);
line2A_btn.addEventListener('click', filterRow2Asc);
line2D_btn.addEventListener('click', filterRow2Des);
