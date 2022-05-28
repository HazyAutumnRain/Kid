export function Navbar(items, options={space: ""}) {
	if (items == undefined || typeof items != "object") {
		console.error("Navbar must contain array of items");
		return "";
	} else {
		for (let x=0; x < items.length; x++) {
			if (items[x].substring(1,3) == "ul" || items[x].substring(1,3) == "ol") {
				items[x] = items[x].substring(0,3) + " style='display: flex; flex-direction: row; list-style-type: none; justify-content: space-between;'" + items[x].substring(3,items[x].length);
			}
		}
		let info = addItems(items);
		if (options.space == "" || options.space == undefined) options.space = "between";
		return (
			`
			<div class="navigation" style="display: flex; flex-direction: row; justify-content: space-${options.space};">
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
