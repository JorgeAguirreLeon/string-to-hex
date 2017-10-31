const input = document.getElementById("input")
const output = document.getElementById("output")
const output_hex = document.getElementById("output-hex")

function change_handler(event) {
  const value = this.value

  output.innerHTML = ''
  output_hex.innerHTML = ''

  for (i=0; i<value.length; i++) {
    let classname = 'character'
    let char = value.substring(i, i+1)
    if (char === ' ') {
      char = '&nbsp;'
      classname += ' whitespace'
    }
    let hex = '0x' + ('000'+value.charCodeAt(i).toString(16)).slice(-4)
    output.innerHTML += `<p class='${classname}'>${char}</p>`
    output_hex.innerHTML += `<p class='hexadecimal'>${hex}</p>`
  }
}

['change', 'keyup', 'input', 'paste', 'cut'].forEach(listener=> input.addEventListener(listener, change_handler))


window.location.search.substring(1).split("&").forEach(search => {
  if (search.startsWith('text=')) {
    input.value = decodeURIComponent(search.substring(5))
    change_handler.bind(input)()
  }
})
