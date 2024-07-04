import Microbeone from "./assets/components/AlertDialog1"
import Microbetwo from "./assets/components/AlertDialog2"
import Microbethree from "./assets/components/AlertDialog3"
import Microbefour from "./assets/components/AlertDialog4"
import Microbefive from "./assets/components/AlertDialog5"


function App() {

  return (
    <>
    <header className="bg-black text-center py-4 text-2xl text-white ffont-mono font-bold">
      <h1>Microbial Fuel Cell's Power</h1>
    </header>
    <div className="font-mono text-2xl font-bold mt-4 ml-8 mb-4">Types Of Microbes: </div>
    <div className="font-mono text-2xl font-bold ml-4 mb-4"><Microbeone/></div>
    <div className="font-mono text-2xl font-bold ml-4 mb-4"><Microbetwo/></div>
    <div className="font-mono text-2xl font-bold ml-4 mb-4"><Microbethree/></div>
    <div className="font-mono text-2xl font-bold ml-4 mb-4"><Microbefour/></div>
      </>
  )
}

export default App
