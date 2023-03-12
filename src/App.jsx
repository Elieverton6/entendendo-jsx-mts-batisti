import './App.css';

function App() {

  const name = "Elieverton";
  const lastName = "Gomes";

  const newName = name.toUpperCase();
  const newLastName = lastName.toUpperCase();

  function sum(a, b) {
    return a + b
  }

  const imgUrl = "https://thumbs.dreamstime.com/b/ilustração-criativa-abstrata-com-leão-colorido-cor-preta-de-190846410.jpg"

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <br/>
      <p>Olá, {newName} {newLastName}</p>
      <br/>
      <p>A soma de 5 + 5 é: {sum(5,5)}</p>
      <br/>
      <img src={imgUrl} width={500} height={300} alt="Minha Imagem" />
    </div>
  );
}

export default App;
