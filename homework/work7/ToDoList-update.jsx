import React, {useState} from "react";
import './ToDoList.css';

function ToDoList(){
  const [inputItem, setInputItem]=useState("");
  const [isEdit, setIsEdit]=useState(false);
  const [itemList, setItemList]=useState([
    {id:'1', value:'리액트 듣기', isEdit:false},
    {id:'2', value:'점심먹기', isEdit:false},
    {id:'3', value:'과제하기', isEdit:false}
  ])

  //선택한 아이템의 키 값을 id 파라미터로 받아, filter 함수로 리스트를 재생성
  //재생성한 itemList는 state변수이므로 렌더링이 되며, 화면이 자동으로 갱신
  const DeleteToDoList=(id)=>{
    setItemList((itemList)=>itemList.filter((itemList)=>itemList.id!==id));
    console.log(itemList);
  }
  
  const UpdateToDoList=()=>{
    setItemList((prevItem)=>{
      return[
        {
          id: itemList.id,
          value: inputItem,
          isEdit: true,
        },
        ...prevItem,
      ]
    });
    setInputItem("");
  }

  const AddToDoList=()=>{
    setItemList((prevItem)=>{
      console.log(itemList.length+1, inputItem);
      return[
        {
          id: itemList.length+1,
          value: inputItem,
          isEdit: false,
        },
        ...prevItem,
      ]
    });
    setInputItem("");
  }

  return(
    <div className="container">
      <h1>To-Do List</h1>
      <div className="add-elements">
        {isEdit?
        <div>
        <input id="update" value={inputItem} autoFocus onChange={(event)=>setInputItem(event.target.value)}/>
        <button id="btn" onClick={()=>UpdateToDoList}>할일수정</button>
        </div>
        :
        <div>
        <input id="add" value={inputItem} onChange={(event)=>setInputItem(event.target.value)}/>
        <button id="btn" onClick={AddToDoList}>할일추가</button>
        </div>
        }
      </div>
      <div id="element-list">
        <ul id="list">
          {itemList.map((item)=>{
            return <li key={item.id}>{item.value}
              <img src="pen.png" onClick={()=>setIsEdit(true)} alt="pen"></img>
              <img src="trash.png" onClick={()=>DeleteToDoList(item.id)} alt="trash"></img></li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;