# Kid

## _A component library for vanilla js_

----
## Contents
  - [Setup](#setup)
  - [Heading](#heading)
  - [Paragraph](#paragraph)
  - [Image](#image)
  - [Button](#button)
  - [Lists](#lists)
  - [Navbar](#navbar)

---

## Setup

Create a javascript file and import the components into them
```js
import * as components from './Components/Components.js'
```
Include your javascript file as a module in your html
```html
<script type="module" src="index.js"></script>
```

Call every components from this.
<p>example:

```js
document.body.innerHTML = `
    ${components.Heading("Hello World!")}
`
```
or get very complex
```js
document.body.innerHTML = `
    ${components.Heading(
      "Hello World!", 
      {align: "center"}
    )}
    ${components.Container(
      [
        components.Para("Welcome to using Kid!", {classname: "welcomemsg"}),
        components.Image("Logo.png", {width: "25px", height: "25px"})
      ],
      {align: "center"}
    )}
`
```

---
&nbsp;

## Heading

```js
Heading(Text: String, options={classname: String, priority: Number, align: String "left" | "right" | "center"})
```

Text must exist for header to be created
<p>Priority means the size of the heading (1 - 6)
<p>Align must be any of the following examples. If anything else, it defaults to being left</p>

---
&nbsp;

## Paragraph

```js
Para(Text: String, options={classname: String})
```
Text must exist for Paragraph to be created


---
&nbsp;

## Image

```js
Image(Path: String, options={width: String, height: String, classname: String})
```

Path must exist for Image to be created
<p>Width and Height must be strings of sizing. Example {width: "50px" height: "35px"}

---
&nbsp;

## Button

```js
Button(Internal: Any, options={width: String, height: String, classname: String, click: String})
```

Internal can be anything including other components. If left blank then it will default to a blank string.
<p>Click must either lead to a function or be a string of js code.

---
&nbsp;

## Lists

### Ordered List
```js
OList(items: Array, options={classname: String, areLinks: Boolean, links: Array})
```

### Unordered List
```js
UList(items: Array, options={classname: String, areLinks: Boolean, links: Array})
```

List must contain an array of either other components or strings.
<p>If areLinks is set to true then an array of paths is required.
<p>Links must contain an array of strings that are paths

---
&nbsp;

## Container

```js
Container(items: Array, options={align: String "left" | "right" | "center", direction: String "row" | "column"})
```

container must contain an array of either other components or strings.

---
&nbsp;


## Navbar

Navbar is a complex component made to create navigation bars easily.


```js
Navbar(items: Array, options={space: String "evenly" | "around" | "between"})
```

Navbar must contain array of either strings or other components