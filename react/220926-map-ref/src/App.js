import React, {useState} from 'react';

function App(){
  const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);
  
  let result = list.filter((value)=>{
    return value.length > 4;
  })

  function filterCheck(){
    let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
    let newList = [];

    for(let i=0; i<lists.length; i++){
      if(lists[i].length > 4){
        newList.push(list[i]);
      }
    }
    let result = lists.filter((value)=>{
      return value.length > 4;
    })
  }
  function addElement(){
    // react에서는 list.push를 사용하면 렌더링이 되지 않는다.
    console.log([...list, 's']);
    // 전개연산자
    setList([...list, 's']);
  }

  return (
    <div>
      <ul>
        {list.map((name, i) => {
          return <li key={i}> {i}. {name} </li>
        })}
      </ul>
      <ul>
        {((name) => {
          return name.includes("a");
        })}
        {result.map((name) => {
          return <li>{name}</li>
        })}
      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
  
}

export default App;