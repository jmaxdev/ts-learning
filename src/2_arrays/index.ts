/*
Array declaration with string data. 
*/
const alesis: Array<string> = []

// We inject Nuitari inside alesis.
alesis.push("Nuitari")

console.log(alesis)

const nuitari: Array<string> = []

// We inject Alesis inside nuitari.
nuitari.push("Alesis")

console.log(nuitari)

// zip alesis and nuitari
const zip = [...alesis, ...nuitari]

console.log(zip)


