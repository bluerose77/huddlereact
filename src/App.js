import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg"

import './App.css';

function App() {

  return (
    <>
      
      <header>

        <img src={logo} alt="logo"/>
      </header>

      <main>

        <img src={mockup} alt="mockup"/>
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button>Register</button>
        </div>
      </main>

    <footer>
    <i class="fab fa-facebook-f"></i>
    </footer>
    </>
  );
}

export default App;
