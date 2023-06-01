// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  const numberOne = parseInt(document.getElementById("firstNumber").value)
  const numberTwo = parseInt(document.getElementById("secondNumber").value)

  // process
  let counter = 0
  let answer = 0
  let remainder = numberOne
  while (remainder >= numberTwo) {
    remainder -= numberTwo
    counter++
  }
  answer = counter

  //output
  if (remainder = 0) {
  document.getElementById("answer").innerHTML = numberOne + " / " + numberTwo + " = " + answer + " with a remainder of " + remainder
  } else {
  document.getElementById("answer").innerHTML = numberOne + " / " + numberTwo + " = " + answer
  }
}