export function Button(internal, options={width: "", height: "", classname: "", click: ""}) {
	if (options.classname == undefined) options.classname = "";
	if (internal == undefined) internal = "";
	return (
		`
		<button class="${options.classname}" style="width: ${options.width}; height: ${options.height}" onclick="${options.click}">
			${internal}
		</button>
		`
	)
}
