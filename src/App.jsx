import Form from "./components/Form/Form"



function App() {
  

  return (
    <div className="bg-purple-200 p-10 min-h-screen">
     
   <div >
   <h1 className="text-center md:text-5xl text-2xl text-teal-400 font-bold my-10 animate__animated animate__backInDown animate__repeat-2">Information Table </h1>
    <div className="w-2/4 mx-auto">
      <Form></Form>
    </div>
   </div>
   </div>
    
  )
}

export default App
