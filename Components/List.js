export function UList(items, options={classname: "left", width: "150px", areLinks: false, links: Object}) {
	if (items != undefined && typeof items == "object") {
		let ls = addItems(items, options.areLinks, options.links);
		if (options.classname == undefined) options.classname = "left";
		if (options.width == undefined) option.width = "150px";
		return `<ul class=${options.classname} style="width: ${options.width}">${ls}</ul>`
	} else {
		console.error("List must contain array");
		return "";
	}
}

export function OList(items, options={classname: "left", width: "150px", areLinks: false, links: Object}) {
	if (items != undefined && typeof items == "object") {
		let ls = addItems(items, options.areLinks, options.links);
		if (options.classname == undefined) options.classname = "left";
		if (options.width == undefined) option.width = "150px";
		return `<ol class=${options.classname} style="width: ${options.width}">${ls}</ol>`
	} else {
		console.error("List must contain array");
		return "";
	}
}

function addItems(items, areLinks, links) {
	let ls = "";
	for (let i=0; i<items.length; i++) {
		if (areLinks) {
			ls += `<a href="${links[i]}"><li>${items[i]}</li></a>`
		} else {
			ls += `<li>${items[i]}</li>`
		}
	}
	return ls;
}
