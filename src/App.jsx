
import Header from './Header';
import Sidebar from './Sidebar'
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <div className='s1-distribution-main'>
        <Sidebar />
        <div className='s1-distribution-submain'>
          <Header />
          <Dashboard />
        </div>
      </div>


    </>
  )
}

export default App;