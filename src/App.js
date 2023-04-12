import React, {useState} from 'react';
import ColorBlock from './Components/ColorBlock';
import ColorForm from './Components/ColorForm';
import './App.css';


const DEFAULT_COLOR = [
  'red',
  'yellow',
  'magenta',
  'black',
  'gray',
  'teal'
]


function App() {
  let [colors, setColors] = useState(DEFAULT_COLOR);
  
  const addToColors=(newColor => {
    setColors([...colors, newColor])

  })

  let colorMap = colors.map((colorString, index) => {
    return <ColorBlock color={colorString} key={index}/>
  });
  return (
    <div className="App">
    {colorMap}
    <ColorForm addToColors={addToColors}/>
    </div>
  );
}

export default App;