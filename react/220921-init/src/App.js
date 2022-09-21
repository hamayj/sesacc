import logo from './logo.svg';
import './App.css';

function App() {
  var name = '';
  const flag = true;
  if (flag) name = "SeSAC";
  else name ="문래";

  // style 정의

  const style = {
    backgroundColor : "yellow",
    color : "blue"
  }

  
  return (
      <div className="test" style={{
        color: "blue"
      }}>
        {name} 
        { flag ? (<h1>True</h1>):<h2>False</h2>}
        {/*  조건 ? (참인경우 실행):거짓인 경우 실행 */}
      </div>
  );
}

export default App;
