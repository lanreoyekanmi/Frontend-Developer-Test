
import './App.css';
import imageFile from './assets/img/logo.png';

function App() {
  return (
    <div className="App">
      <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
      <a href="App.js" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" ></img>
        <span class="d-none d-lg-block">FinTech</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div> 


      </header>
    </div>
  );
}

export default App;
