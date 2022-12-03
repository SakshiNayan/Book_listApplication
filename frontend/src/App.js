import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookList from "./Component/BookApp/BookList";
import CreateForm from "./Component/BookApp/Create/createForm";
import CreateBook from "./Component/BookApp/Create/newBook";
import BookDetail from "./Component/BookApp/Detail/BookDetail";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import {UserContextProvider} from './Context/UserContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <UserContextProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>

          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<BookList/>}/>
          <Route path="/create" element={<CreateBook/>}/>
          <Route path="/createForm" element={<CreateForm/>}/>
          <Route path='/detail' element={<BookDetail/>} />
        </Routes>
    </UserContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
