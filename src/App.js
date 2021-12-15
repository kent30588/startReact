import './App.css';

function WhoAmI({name, surname, link}) {
	return (
		<div>
			<h1>Мое имя {name()}, фамилия - {surname}</h1>
			<a href={link}>Мой профиль</a>
		</div>
	)
}

function App() {
  return (
	  <div className="App">
		  <WhoAmI name={()=> {return 'Александр'}} surname="Караулов" link="https://vk.com/id13598284" />
		  <WhoAmI name={()=> {return 'Татьяна'}} link="https://vk.com/id38979581"/>
    </div>
  );
}

export default App;