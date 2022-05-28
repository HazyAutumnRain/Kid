export function Para(string, options={classname: ""}) {
    if (string == undefined || typeof string != "string") {
        console.error("Text must include string");
        return "";
    } else {
        if (options.classname == undefined) options.classname = "";
        return `<p class="${options.classname}">${string}</p>`
    }
}