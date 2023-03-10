#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// inspired by `npx mxstbr`

const gradient = require("gradient-string");

const card = `
  ███████████████████████████████████████
  ██           _                       ██
  ██    _____ (_)__      Christopher   ██
  ██   / ___// / _ \\         Ehrlich   ██
  ██  / /__ / /  __/                   ██
  ██  \\___// /\\___/                    ██
  ██    /___/                          ██
  ██                                   ██
  ██   ehrlich.christopher@gmail.com   ██
  ██   c-ehrlich.dev                   ██
  ██   github              c-ehrlich   ██
  ██   twitter          ccccjjjjeeee   ██
  ██                                   ██
  ███████████████████████████████████████`;

const cardGradient = gradient(
  Object.values({
    blue: "#add7ff",
    magenta: "#fae4fc",
    red: "#d0679d",
  })
);

const cardOutput = cardGradient.multiline(card);

console.log(cardOutput);
