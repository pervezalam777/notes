
import RadioButtonComponent from './components/RadioButtonComponent';
import RadioButtonGroupComponent from './components/RadioButtonGroupComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <RadioButtonGroupComponent name='gender'>
        <RadioButtonComponent value="Male">Male</RadioButtonComponent>
        <RadioButtonComponent value="Female">Female</RadioButtonComponent>
        <RadioButtonComponent value="Trans">Trans</RadioButtonComponent>
      </RadioButtonGroupComponent>
    </div>
  );
}

export default App;
