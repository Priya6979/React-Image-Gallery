import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import './styles.css';

function App() {
	const [images, setImages] = useState([]);
	const [isloading, setIsloading] = useState(true);
	const [term, setTerm] = useState('cat');
	const [login, setLogin] = useState(false);
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const clickHandler = () => {
		setLogin(!login);
		localStorage.setItem('Username', username);
		localStorage.setItem('password', password);
	};

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=29536220-90609b5fadda99b9a0981664f&q=${term}&image_type=photo&pretty=true`
			)
			.then((res) => {
				setImages(res.data);
				setIsloading(false);
			})
			.catch((error) => {
				console.log('Error', error);
			});
	}, [term]);
	return (
		<div className="App">
			<Header />

			{!login ? (
				<div className="login">
					<div className="form-card">
						<h1>Login</h1>
						<input
							className="field"
							placeholder="Username...xyz@gmail.com"
							type="text"
							onChange={(e) => setUserName(e.target.value)}
						/>
						<input
							className="field"
							placeholder="Password..."
							type="text"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={clickHandler}>Submit</button>
					</div>
				</div>
			) : (
				<div>
					<ImageSearch searchText={(text) => setTerm(text)} />
					{!isloading && images.hits.length === 0 && (
						<h1 className="message">No Images Found</h1>
					)}
					<div className="flex-main">
						{isloading ? (
							<h1>Loading...</h1>
						) : (
							images &&
							images?.hits?.map((image, index) => {
								return (
									<div
										key={index}
										className="main"
									>
										<ImageCard
											key={image.id}
											image={image}
										/>
									</div>
								);
							})
						)}
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
}

export default App;
