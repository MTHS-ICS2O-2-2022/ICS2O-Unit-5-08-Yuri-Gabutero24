// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  let numberOne = parseInt(document.getElementById("number-one").value)
  let numberTwo = parseInt(document.getElementById("number-two").value)

  // process
  let counter = 0
  while (numberOne >= numberTwo) {
    numberOne -= numberTwo
    counter++
  }

  //output
  if (numberOne != 0) {
    document.getElementById("answer").innerHTML = "The answer is " + counter + " with a remainder of " + numberOne
  } else {
    document.getElementById("answer").innerHTML = "The answer is " + counter
  }
}