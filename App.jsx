import ChangeValue from "./Components/ChangeValue";
import FetchData from "./Components/FetchData";
import NashirComponent from "./Components/NashirComponent";



function App()   {
  

  return (
    <div className="container max-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <div className="bordar rounded-2xl drop-shadow-lg bg-white dark: bg-gray-800 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-600 sm:text-blue-600
      md:text-green-600 lg:text-indigo-600 xl:text-[hotpink] hover:text-amber-600 mb-4"><NashirComponent data="Hello" carecter="World"/></h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
      px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform
      hover:scale-105 dark:text-white dark:bg-black ">Read More</button>
      </div>
      <div className="bordar rounded-2xl drop-shadow-lg bg-white dark: bg-gray-800 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-600 sm:text-blue-600
      md:text-green-600 lg:text-indigo-600 xl:text-[hotpink] hover:text-amber-600 mb-4"><NashirComponent data="আপাতত সবকিছুতে ব্যর্থ আমি!"/> </h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
      px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform
      hover:scale-105 dark:text-white dark:bg-black ">Read More</button>
      </div>
      <div className="bordar rounded-2xl drop-shadow-lg bg-white dark: bg-gray-800 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-600 sm:text-blue-600
      md:text-green-600 lg:text-indigo-600 xl:text-[hotpink] hover:text-amber-600 mb-4"><NashirComponent data="😊💔"/></h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
      px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform
      hover:scale-105 dark:text-white dark:bg-black ">Read More</button>
      </div>
      <div className="col-span-3 border rounded-2xl shadow-lg p-4 bg-white
       *:dark:bg-gray-800 text-center"><ChangeValue/></div>
       <div ><FetchData/></div>
    </div>
    
  )
}

export default App
