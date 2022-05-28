export function Image(string, options={width: "", height: "", classname: ""}) {
    if (string == undefined || typeof string != "string") {
        console.error("String must lead to photo");
    } else {
        if (options.classname == undefined) options.classname = "";
        return `<img class="${options.classname}" src=${string} style="width: ${options.width}; height: ${options.height}">`
    }
}