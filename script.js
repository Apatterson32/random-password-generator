// Assignment code here
function generatePassword() {
  const passwordLength = document.getElementById('passwordLength').value;
  const includeLower = document.getElementById('includeLower').checked;
  const includeUpper = document.getElementById('includeUpper').checked;
  const includeNumeric = document.getElementById('includenNumeric').checked;
  const includeSpecial = document.getElementById('includeSpecial').checked;
  
  if (passwordLength <8 || passwordLength > 128) {
    alert('Please enter a password length between 8 and 128 characters.');
    return;
  }

  if (!includeLower && !includeUpeer && !includeNumeric && !includeSpecial) {
    alert('Please select one character type to include in the password.');
    return;
  }

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+{[]}|:;<>?';

  let availableChars = '';
  if (includeLower) availableChars += lowercaseChars;
  if (includeUpper) availableChars += uppercaseChars;
  if (includeNumeric) availableChars += numericChars;
  if (includeSpecial) availableChars += specialChars;

  let generatedPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars.charAt(randomIndex);
  }

  document.getElementById('generatedPassword').textContent = 'Generated Password: ' = generatedPassword;
  document.getElementById('generatedPassword').style.display = 'block';
}

document.querySelector('button').addEventListener('click', function() {
  document.getElementById('passwordCriteria').style.display = 'block';
  this.style.display = 'none';
});
