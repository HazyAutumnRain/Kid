export function Header(string, options={classname: "", priority: 1, align: "left"}) {
	if (string == undefined || typeof string != "string") {
		console.error("Header must contain string");
		return "";
	} else {
		if (options.priority == undefined) options.priority = 1;
		if (options.classname == undefined) options.classname = "";
		if (options.id == undefined) options.id = "";
		if (options.align == undefined) options.align = "left";
		return `<div class="${options.align}"><h${options.priority} class="${options.classname}">${string}</h${options.priority}></div>`		
	}
}
