
// using build-in function
function reverseString(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }

console.log(reverseString("Omor Faruk Nahid"));  



// using for loop

function reverseString2(str) {
    let result = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
  
    return result;
  }

console.log(reverseString2("abcdef"));  