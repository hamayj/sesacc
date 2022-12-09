import React, { useState } from 'react';


type AppProps = {
  name: string;
  age?: number; // 옵셔널 속성이 없으면 무조건 받아야 함. 
}
function App(props:AppProps) {
  const [list, setList] = useState<number[]>([]); // useState 등 훅을 사용할 때 타입은 제네릭으로 쓰면 됨. 
  return (
    <div className="App">
      { props.name}
    </div>
  );
}

export default App;
