export function Button(internal, options={width: "", height: "", classname: ""}) {
	if (options.classname == undefined) options.classname = "";
	if (internal == undefined) internal = "";
	return (
		`
		<button class="${options.classname}" style="width: ${options.width}; height: ${options.height}">
			${internal}
		</button>
		`
	)
}
