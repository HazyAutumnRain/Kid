export function Navbar() {
	return (
		`
		<div class="navbar">
			<img src="assets/placeholder.jpg" width="50px">
			<ul>
				<a href="#"><li>Works</li></a>
				<a href="#"><li>Github</li></a>
				<a href="#"><li>Info</li></a>
			</ul>
			<button id="darkbutton" class="roundbutton" onclick="handleDarkMode()">
				<img id="btnimage" src="assets/moon.png" width="25px">
			</button>
		</div>		
		`
	)
}
