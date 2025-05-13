
// Showing variable on view 
const App = (()=>{
  let n = 12;
  let s = 'hello world' ;
  let b = true;
  let nl = null;
  let un = undefined;

  let arr = [<h1>Heyy</h1>, 10,20,30,40,50, "hello", undefined, true, null, 100]

  let obj = {
    name : "Sipun", 
    age : 24
  }
  return (<>
  <h1>Datatypes</h1>
  <h2>Number: {n}</h2>
  <h2>String: {s}</h2>
  <h2>Boolean: {b}</h2>
  <h2>Null: {nl}</h2>
  <h2>Undefined: {un}</h2>
  <h2>Array : {arr}</h2>
  <h2>Object : {obj.name} | {obj.age}</h2>
  </>)
})

// export default App
