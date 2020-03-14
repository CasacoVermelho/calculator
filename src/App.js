import React from 'react';
import './App.css';

const Display = props =>{
  return (
      <div style={{padding:10,textAlign:"right",backgroundColor:"#eeeeee",border:"1px solid"}}>
        <h1>{props.show}</h1>
      </div>
    );
}

const Teclado = () =>{
	return (
		<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
			<Botao digit={7}/>
			<Botao digit={8}/>
			<Botao digit={9}/>
			<Botao digit={"/"}/>
			<Botao digit={4}/>
			<Botao digit={5}/>
			<Botao digit={6}/>
			<Botao digit={"*"}/>
			<Botao digit={1}/>
			<Botao digit={2}/>
			<Botao digit={3}/>
			<Botao digit={"-"}/>
			<Botao digit={0}/>
			<Botao digit={"."}/>
			<Botao digit={"="}/>
			<Botao digit={"+"}/>
		</div>
	);
}

const Botao = props =>{
	return (
		<div style={{marginTop:"5px",borderRadius:"30px",textAlign:"center",width:"23%",backgroundColor:"#cccccc",border:"1px solid"}}>
			<h2>{props.digit}</h2>
		</div>
	);
}

const App = () =>{
  return (
  	<div style={{backgroundColor:"#777777",width:"100%",maxWidth:"350px",margin:"auto"}}>
    	<Display show={0}/>
    	<Teclado/>
    </div>
  );
}

export default App;
