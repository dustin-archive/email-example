const fs = require('fs')
const h = require('hyperscript')

const json = [
  {
    title: 'foobar',
    tagline: 'foobar foobar',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    phone: '1234567890',
    email: 'foobar@foobar.com',
    url: 'http://www.foobar.com/',
    image: 'http://placehold.it/576x144'
  }, {
    title: 'foobar',
    tagline: 'foobar foobar',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    phone: '1234567890',
    email: 'foobar@foobar.com',
    url: 'http://www.foobar.com/',
    image: 'http://placehold.it/384x144'
  }, {
    title: 'foobar',
    tagline: 'foobar foobar',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    phone: '1234567890',
    email: 'foobar@foobar.com',
    url: 'http://www.foobar.com/',
    image: 'http://placehold.it/192x144'
  }
]

function listing (data) {
  return h('div', { style: 'padding:12px' }, [
    h('div', { style: 'border-radius:2px;background:#fff;box-shadow:0 2px 4px 0 #dbdddf;overflow:hidden' }, [
      h('div', { style: 'background:#f3f5f7' }, [
        h('img', { src: data.image, style: 'max-width: 100%' })
      ]),
      h('div', { style: 'padding:16px 24px' }, [
        h('div', { style: 'text-align:center' }, [
          h('div', { style: 'margin:0;padding:0 0 6px;font-size:18px' }, data.title),
          h('div', { style: 'margin:0;padding:0 0 12px;font-size:14px' }, data.tagline)
        ]),
        h('div', { style: 'padding:0 0 12px;font-size:14px' }, data.content),
        h('div', { style: 'text-align:center' }, [
          h('a', { href: data.url, style: 'display:inline-block;padding:12px 18px;border-radius:2px;color:#fff;text-decoration:none;background:#df1f3f' }, 'Click Here to Learn More')
        ])
      ])
    ])
  ])
}

function listings (data) {
  const listings = []
  for (let i = data.length; i--;) {
    listings[i] = listing(data[i])
  }
  return listings
}

function page (data) {
  return h('html', { lang: 'en' }, [
    h('body', { style: 'margin:0;font-family:sans-serif;background:#ebedef' }, [
      h('div', { style: 'max-width:600px;margin:auto;padding:12px' }, [
        h('div', { style: 'padding:12px' }, [
          h('div', { style: 'height:192px;border-radius:2px;background:#212325;overflow:hidden' })
        ]),
        listings(data)
      ])
    ])
  ])
}

fs.writeFile('email.html', page(json).outerHTML, (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})
