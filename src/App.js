import logo from './logo.svg';
import './App.css';
import Text from './Text';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <body onload = "startTimer()"> 
    <div id="container">
       <header id="header">
        <h1  id="titrebuttons">Vous voulez avoir des informations sur quel personne?</h1>
        <button type="button" id="button1">Jean</button>	  
        <button type="button" id="button2">Paul</button>	
        <button type="button" id="button3">Jhessica</button>	
       </header>
       <main id="main">
         <header id="nom_et_prenom">
           <h3 id="nom1">Nom: Boucher</h3>
           <h3 id="prenom1">Prénom: Jean</h3>
         </header>
         <article id="image_et_date">
         <img id="image1" src="image/image1.png" height="150" width="150"/>
          <h3 id="date1">Date de naissance: 8 septembre 1993</h3>
         </article>
         <footer id="changer_profile">
            <button type="button" id="button4">Changer de Style</button>	
         </footer>   
       </main>
       <footer id="footer">
           <h3>Commentaire:</h3>
           <p>Bonjour a tous, c'est Jean. Je travaille dans un start-up et je travaille actuellement sur de la collecte de donnée dans les restaurants en France! J'aodre le foot, vive le PSG et vive la France!</p>
       </footer>
       <button type="button" id="button5">Like the profile (? likes)</button>	
    </div>
  </body>
  );
  
}

export default App;
