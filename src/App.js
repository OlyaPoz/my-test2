import classes from './App.module.css';
import { Square } from './components/Square';

function App() {
  const colors = ['blue', 'green', 'red', 'grey', 'yellow'];
  const choosenColors = [];
  const squares = []

  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const setRandomColor = () => {
    const index = randomInteger(0, squares.length - 1)

    return colors[index]
  }

  for (let i = 0; i < 6; i++) {
    squares.push(<Square color = { setRandomColor() } key = { i } />)
  }
  
  return (
    <div className = { classes.App }>
      <div>
      { squares }

      </div>
    </div>
  );
}

export default App;


