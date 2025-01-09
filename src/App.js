import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { ProjectComponent } from './components/ProjectComponent';
import { ContactComponent } from './components/ContactComponent';
import { FooterComponent } from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <div className="main">
        <HeaderComponent />
        <ProjectComponent />
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
