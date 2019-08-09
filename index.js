function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

// console.log(takeANumber(['John', 'Montrezl'], 'Billy'))

let pokemon = ['Cyndaquil', 'Bulbasaur', 'Charmander', 'Squirtle'];
<<<<<<< HEAD
// let pokemon = [];
=======
// ashKetchum = [];
>>>>>>> 0a89daa0da795279699bfdff4e259f9abc39f1ae

function nowServing(line) {
  if (line[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  };
};

// console.log(nowServing(pokemon));
// console.log(pokemon);

<<<<<<< HEAD
function newPokemonArray(line) {
  for (let i = 0; i < line.length; i++) {
=======
/* var testArray = ['Cat', 'Dog'];

function currentLine(line) {
  line.forEach(arrayFunction);
  function arrayFunction(item, index) {
    return `${index}. ${item}`;
  };
};

console.log(currentLine(testArray));
*/

function newPokemonArray(line) {
  for (let i = 0; i < line.length; i++) {  
>>>>>>> 0a89daa0da795279699bfdff4e259f9abc39f1ae
    line[i] = `${line.indexOf(line[i])+1}. ${line[i]}`;
  };
  return line;
};

function currentLine(line) {
  if (line[0] === undefined) {
    return "The line is currently empty.";
  } else {
      return `The line is currently: ${newPokemonArray(line).join(', ')}`;
      // return `The line is currently: ${line.join(', ')}`;
  };
};

<<<<<<< HEAD
console.log(currentLine(pokemon));
=======
console.log(currentLine(pokemon));
>>>>>>> 0a89daa0da795279699bfdff4e259f9abc39f1ae
