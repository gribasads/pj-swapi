import React, { useState } from 'react';
import  Inicial from './components/index';
import Loading from './components/loading';
import Search from './components/search';
function App() {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);

 
  return (
  <div className={'flex flex-col items-center justify-center h-screen'}>
  {/* <Loading/>
  <Inicial />
  <Result/> */}
  <Search/>
  </div>

    

);
}

export default App;
