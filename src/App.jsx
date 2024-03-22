import Form from "./components/Form/Form"



function App() {
  

  return (
    <div className="bg-purple-200 md:p-10 p-4 min-h-screen">
     
   <div >
   <h1 className="text-center md:text-5xl text-2xl text-teal-400 font-bold my-10 animate__animated animate__backInDown animate__repeat-2">Information Table </h1>
    <div className="md:w-2/4 mx-auto bg-slate-100 rounded-2xl md:p-10 p-4">
      <Form></Form>
    </div>
   </div>
   </div>
    
  )
}

export default App
