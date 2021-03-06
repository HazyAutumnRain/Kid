export function Heading(string, options={classname: "", priority: 1, align: "left"}) {
	if (string == undefined || typeof string != "string") {
		console.error("Header must contain string");
		return "";
	} else {
		if (options.priority == undefined) options.priority = 1;
		if (options.classname == undefined) options.classname = "";
		if (options.id == undefined) options.id = "";
		let align = "";
		if (options.align != undefined) {
			if (options.align == "left") {
				align = 'style="display: flex; flex-direction: column; align-items: start;"';
			} else if (options.align == "right") {
				align = 'style="display: flex; flex-direction: column; align-items: end;"';
			} else if (options.align == "center") {
				align = 'style="display: flex; flex-direction: column; align-items: center;"';
			} else {
				align = "";
			}
		}
		return `<div ${align}><h${options.priority} class="${options.classname}">${string}</h${options.priority}></div>`		
	}
}
