
// QUESTION 1
function createAdder(num) {
    return function(value) {
      return num + value;
    }
  }

  const addFive = createAdder(5);
console.log(addFive(10)); 
console.log(addFive(20)); 
console.log(addFive(30)); 

// QUESTION 2

function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }

  const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); 
console.log(searchArray(myArray, 6)); 

// QUESTION 3

function addParagraph(text) { 
    const paragraph = document.createElement('p'); 
    const content = document.createTextNode(text); 
    paragraph.appendChild(content); 
    document.body.appendChild(paragraph); 
  }
  addParagraph('This is a new paragraph.');

//   QUETION 4  

function addListItem(text) {
    const listItem = document.createElement('li');
    const content = document.createTextNode(text);
    listItem.appendChild(content); 
    const unorderedList = document.querySelector('ul'); 
    unorderedList.appendChild(listItem); 
  }
  addListItem('New Item');

//   QUESTION 5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.getElementById('myElement');
changeBackgroundColor(myElement, 'red');

// QUETION 6
function saveObjectToLocalStorage(key, object) {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString); 
  }
  const myObject = { name: 'John', age: 30 };
saveObjectToLocalStorage('myKey', myObject);

// QUETION 7
function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    const object = JSON.parse(objectString);
    return object;
  }
  const myObject1 = getObjectFromLocalStorage('myKey');
console.log(myObject1);

// QUESTION 8
function saveObjectPropertiesToLocalStorage(object) {
 for (const property in object) {
      if (object.hasOwnProperty(property)) {
        localStorage.setItem(property, object[property]);
      }
    }
    
 const keys = Object.keys(object);
    const retrievedObject = {};
    for (const key of keys) {
      retrievedObject[key] = localStorage.getItem(key);
    }
    return retrievedObject;
  }
  const myObject2 = { name: 'John', age: 30 };
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject2);
console.log(retrievedObject);