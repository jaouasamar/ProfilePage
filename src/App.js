
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto';
import FullName from './Component/Profile/FullName/FullName';
import Adress from './Component/Profile/Address/Adress';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Component/Menu/Menu';
import Slide from './Component/slides/Slide';
import Side from './Component/sidebar/Side';


function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Side />
  
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      <Slide/>
      
    </div>
  );
}

export default App;
