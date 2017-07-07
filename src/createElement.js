const createElement = h => {
  // start open tag
  let node = `<${h[0]}`

  // set attributes
  for (let attr in h[1]) {
    node += ` ${attr}='${h[1][attr]}'`
  }

  // end open tag
  node += '>'

  // append children
  if (h[2] !== null) {
    if (h[2].constructor === Array) {
      for (let i = 0, l = h[2].length; i < l; i++) {
        node += createElement(h[2][i])
      }
    } else {
      node += h[2]
    }
  }

  // return node if void
  if (isVoid(h[0])) {
    return node
  }

  // return node with close tag
  return node + `</${h[0]}>`
}

const isVoid = tag => tag === 'img' || tag === 'input' || tag === 'meta' ||
  tag === 'br' || tag === 'wbr' || tag === 'embed' || tag === 'area' ||
  tag === 'base' || tag === 'col' || tag === 'link' || tag === 'param' ||
  tag === 'source' || tag === 'track'

module.exports = createElement
