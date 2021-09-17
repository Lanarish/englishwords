import React from 'react';
import './App.css';
import TableList from './components/TableList';
import Carousel from './components/Carousel';
import CardsList from './components/CardsList';

const words = [
  { id: "1", english: "butterfly", transcription: "[ˈbʌtəflaɪ]", translation: "бабочка" },
  { id: "2", english: "library", transcription: "[ ˈlaɪbrəri ]", translation: "библиотека" },
  { id: "3", english: "cinema", transcription: "[ ˈsɪnəmə ]", translation: "кино" },
  { id: "4", english: "world", transcription: "[ wɜːld ]", translation: "мир" },
  { id: "5", english: "boy ", transcription: "[ bɔɪ ] ", translation: "мальчик" },
  { id: "6", english: "life", transcription: "[ laɪf ] ", translation: "жизнь" },
  { id: "7", english: "friend", transcription: " [ frend ] ", translation: "друг" },
  { id: "8", english: "family ", transcription: "[ ˈfæm. ə l.i ] ", translation: "семья" },
  { id: "9", english: "window", transcription: "[ ˈwɪn.dəʊ ] ", translation: "окно" },
  { id: "10", english: "get ", transcription: "[get]",translation: "получать" },
  { id: "11", english: "use", transcription: "[ juːz ] ",translation: "использовать" },
  { id: "12", english: "find ", transcription: " [ faɪnd ]  ",translation: "найти" }

];

function App() {
  return (
    <div className="App">
      <CardsList/> 
      <TableList/>
      <Carousel data={words}/>
    </div>
  );
}

export default App;
