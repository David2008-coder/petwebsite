import { useEffect, useState } from "react";
import "./App.css";
import PetSignIn from "./Components/PetSignIn";
import PetProfile from "./Components/PetProfile";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PetProfileWrapper from "./Components/PetProfileWrapper";
import FeedBack from "./Components/FeedBack";
import HomePage from "./Components/Homepage";
import PetAdoption from "./Components/PetAdoption";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import PetProductsPage from "./Components/PetsProductsPage";
import Emergency from "./Components/Emergency";
import Veterinarian from "./Components/Veterinarian";

function App() {
	const [name, setName] = useState("");
	const [species, setSpecies] = useState("");
	const [breed, setBreed] = useState("");
	const [age, setAge] = useState("");
	const [vaccine, setVaccine] = useState("");
	const [firstName, setFirstName] = useState('')


	function handleNameInput(nameInput){
		setName(nameInput)
	}
useEffect(() => {
	localStorage.setItem('firstName', firstName);

	
}, [])

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage setFirstName={setFirstName} />} />
					<Route
						path="/sign-in"
						element={
							<PetSignIn
								handleNameInput = {handleNameInput}
								name={name}
								species={species}
								setSpecies={setSpecies}
								breed={breed}
								setBreed={setBreed}
								age={age}
								setAge={setAge}
								vaccine={vaccine}
								setVaccine={setVaccine}
							/>
						}
					/>

					<Route
						path="/pet-care"
						element={
							<PetProfileWrapper
							/>
						}
					/>
					<Route path="/feedback" element={<FeedBack />} />
					<Route path="/animal-shelter" element={<PetAdoption firstName={firstName} />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/pet-product" element={<PetProductsPage />} />
					<Route path="/emergency" element={<Emergency />} />
					<Route path="/veterinarian" element={<Veterinarian firstName={firstName} />} />





				</Routes>
				
			</BrowserRouter>
		</>
	);
}

export default App;
