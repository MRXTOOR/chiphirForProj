import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function CaesarCipher() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleEncrypt = () => {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let encrypted = '';
    for (let i = 0; i < message.length; i++) {
      let letter = message.charAt(i).toLowerCase();
      let index = alphabet.indexOf(letter);
      if (index !== -1) {
        encrypted += (index + 1) + '-';
      } else {
        encrypted += letter;
      }
    }
    setResult(encrypted.slice(0, -1));
  };
  
  const handleDecrypt = () => {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.toLowerCase();;
    let decrypted = '';
    const encryptedChars = message.split('-');
    for (let i = 0; i < encryptedChars.length; i++) {
      const encryptedChar = encryptedChars[i];
      if (!isNaN(encryptedChar) && encryptedChar >= 1 && encryptedChar <= 33) {
        decrypted += alphabet[encryptedChar - 1];
      } else {
        decrypted += encryptedChar;
      }
    }
    setResult(decrypted);
  };
  
  
//Изначально был создан для работы с шифром цезаря но потом опять был переделан под шифр подстановки 
 
return (
  <div>
    <h3>Шифр подстановки</h3>
    <label htmlFor="a1z26-message">Сообщение: </label>
    <div className='mr-10'>
    <TextField type="text" label="Filled" id="a1z26-message" value={message} onChange={(e) => setMessage(e.target.value)}/>
  
    </div><div className='mr-10'>
    <Button onClick={handleEncrypt} variant="contained">Зашифровать</Button>
    </div>
    <div className='mr-10'>
    <Button  onClick={handleDecrypt} variant="outlined">Расшифровать</Button>
    </div>
    <p>{result}</p>
  </div>
);
}

export default CaesarCipher;
