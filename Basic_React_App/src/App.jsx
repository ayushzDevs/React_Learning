import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product_group.jsx"
import Msg_Tab from "./Msg_tab.jsx"

function Des(){
  return <h3>I am description</h3>
}
function App() {
  return (
    <>
      <Msg_Tab/>
      <Product/>
    </>
  )
}

export default App
 
