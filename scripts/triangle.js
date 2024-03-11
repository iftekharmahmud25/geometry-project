// // Calculate Triangle Calculation

// function calculateTriangleArea() {
//   // get triangle base value
//   const triangleBaseInput = document.getElementById("triangle-Base");
//   const triangleBaseText = triangleBaseInput.value;
//   const base = parseFloat(triangleBaseText);
//    //console.log( base)

//   // get triangle Height value

//   const triangleHeightInput = document.getElementById("triangle-height");
//   const triangleHeightText = triangleHeightInput.value;
//   const height = parseFloat(triangleHeightText);
//   //console.log( height);

//  const area = 0.5 * base * height;
// // console.log('area of triangle is ',area)

//  // display triangle area

//  const triangleAreaSpan = document.getElementById('triangle-area');
//  triangleAreaSpan.innerText = area;

// }

//Calculate Rectangle Calculation

// function calculateRectangleArea(){

//    const rectangleWidthInput = document.getElementById('rectangle-width');
//    const rectangleWidthText = rectangleWidthInput.value;
//    const width  = parseFloat(rectangleWidthText);
//    //console.log(  width)

//    const rectangleLengthInput = document.getElementById('rectangle-length');
//    const rectangleLengthText = rectangleLengthInput.value;
//    const length = parseFloat(rectangleLengthText);
//    //console.log(length)

//    const area = width * length;

// }
//    const rectangleAreaSpan = document.getElementById('rectangle-area');

//    rectangleAreaSpan.innerText = area;

// function calculateParallelogramArea(){

//   const parallelogramBaseInput = document.getElementById('parallelogram-base');
//   const parallelogramBaseText = parallelogramBaseInput.value ;
//   const base = parseFloat(parallelogramBaseText);

//  const parallelogramHeightInput = document.getElementById('parallelogram-height');
//  const parallelogramHeightText = parallelogramBaseInput.value;
//  const height =  parseFloat(parallelogramBaseText);

//  const area = base * height;

// const parallelogramSpanArea = document.getElementById('parallelogram-area');
// parallelogramSpanArea.innerText = area;

// }

//pentagon calculate

// function calculatePentagonArea() {
//   const perimeter = getInputValueById("pentagon-perimeter");
//   const apothem = getInputValueById("pentagon-apothem");
//   const area = 0.5 * perimeter * apothem;

//   setInnerTextById("pentagon-area", area);
// }

// function getInputValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputValueText = inputField.value;
//   const value = parseFloat(inputValueText);
//   return value;
// }

// function setInnerTextById(elementId, area) {
//   const element = document.getElementById(elementId);

//   element.innerText = area;
// }


//  Calculate ellipse 


function calculateEllipseArea() {
  const a = getInputById("ellipse-a");
  const b = getInputById("ellipse-b");

  const area = 3.1416 * a * b;

  setInnerTextById("ellipse-area", area);
}

function getInputById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);
  return value;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById("ellipse-area");
  element.innerText = area;
}



function calculateTriangleArea(){
 
  const base = getInputValueById('triangle-Base');
  const height = getInputValueById('triangle-height');

  const area = 0.5 * base * height;
  setInnerText('triangle-area',area)

}

function getInputValueById(inputId){
  
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const value = parseFloat(inputFieldText);
  return value;
}



function setInnerText(elementId,area){
    
  const element = document.getElementById('triangle-area');
  element.innerText = area;

}






