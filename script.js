function generatePassword (length, includeLowercase, includeUpperase, includeNumber, includeSymbols) {

  //default values that you can choose yourself
  const lowercaseChars = 'abc';
  const uppercaseChars = 'ABC';
  const numberChars = '123';
  const symbolChars = '%&)';

  let allowedChars = '';
  let password ='';

  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUpperase ? uppercaseChars : '';
  allowedChars += includeNumber ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';
  

if( length <= 0 ){
  return `(Password length must be at least 1)`;
}

 if (allowedChars.length === 0){
  return `(At least 1 set of characters needs to be selected)`;
} 

  for (let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUpperase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUpperase, includeNumber, includeSymbols); 
console.log(`Generate password: ${password}`);