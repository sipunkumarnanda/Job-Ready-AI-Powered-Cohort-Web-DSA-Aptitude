
const App = () => {

  // we can write logic here 

  // non-parameterized function
  const handleClick = () =>{
    alert("Button clicked")
  }

  // Parameterized function
  const handleparamclick = (msg) =>{
    alert(msg)
  }

  // const wrapperHandler = () => handleparamclick("hello iam parameterized func")

  return (
    <>
    <h1>{ 2+5 }</h1>
    <div>Hello</div>
    <div>world</div>
    <button onClick={handleClick}>Click</button> <br /> <br />
    <button onClick={() => handleparamclick("hello iam parameterized func")}>click param</button>
    </>
  )
}

export default App


// function call is replaced by its return value 
// a function component always return HTML

// we can't write anything after return
// we can only return single data / entity / variable / value 
// there must be single return in a function and that must be the last statement 