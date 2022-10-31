import React from "react"; //import react

const ThemeContext = React.createContext('light'); //컨텍스트 객체 생성

function ContextApp(){ //ContextApp 함수 선언
  return(
    //컨텍스트 제공
    <ThemeContext.Provider value="lavender">
      <Toolbar/>
    </ThemeContext.Provider>
  );
}

function Toolbar(){ //Toolbar 함수 선언
  return(
    <div>
      <ThemeButton/>
    </div>
  );
}

function ThemeButton(){ //ThemeButton 함수 선언
  return(
    <div>
      <Button/>
    </div>
  );
}

function Button(){ //Button 함수 선언
  return(
    <div>
      {/*컨텍스트 구독 요청*/}
      <ThemeContext.Consumer>
        {value=>(
          <div style={{margin:50, padding:50, backgroundColor:value,}}>
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default ContextApp; //export ContextApp