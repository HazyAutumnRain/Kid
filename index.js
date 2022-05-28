import * as components from './Components/Components.js'

document.body.innerHTML = `
    ${components.Heading(
      "Hello World!", 
      {align: "center"}
    )}
    ${components.Container(
      [
        components.Para("Welcome to using Kid!", {classname: "welcomemsg"}),
        components.Image("Logo.png", {width: "25px", height: "25px"}),
      ],
      {align: "center"}
    )}
`