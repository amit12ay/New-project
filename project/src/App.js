
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <div>This Is home</div>

  },
  {
    path: "/test",
    element: <div>This Is test</div>

  },
])

function App() {
  return (
   <>
   <div>
<RouterProvider router={router}/>
   </div>
   </>
  
  )
}

export default App;
