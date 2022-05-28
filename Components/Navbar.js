export function Navbar(items) {
	if (items == undefined || typeof items != "object") {
		console.error("Navbar must contain array of items");
	} else {
		let info = addItems(items);
		return (
			`
			<div class="navigation">
				${info}
			</div>
			`
		)
	}
}

function addItems(items) {
	let ls = "";
	for (let i=0; i<items.length; i++) {
		ls += items[i];
	}
	return ls;
}
