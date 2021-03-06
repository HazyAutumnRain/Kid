export function Container(items, options={classname: "", align: "", direction: ""}) {
    if (items == undefined || typeof items != "object") {
		console.error("Container must contain array of items");
		return "";
	} else {
        let info = addItems(items);
		if (options.classname == undefined) options.classname = "";
        let align = "";
        if (options.direction != undefined) {
            if (options.align != undefined) {
                if (options.align == "left") {
                    align = `style="display: flex; flex-direction: ${options.direction} ; justify-content: start; align-items: center"`;
                } else if (options.align == "right") {
                    align = `style="display: flex; flex-direction: ${options.direction}; justify-content: end; align-items: center""`;
                } else if (options.align == "center") {
                    align = `style="display: flex; flex-direction: ${options.direction}; justify-content: center; align-items: center"`;
                } else {
                    align = "";
                }
            }
        } else {
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
        }
		
		return (
			`
			<div class="${options.classname}" ${align}>
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
