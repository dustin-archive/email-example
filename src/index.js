const fs = require('fs')

const data = require('./data')
const createElement = require('./createElement')

const listing = data => ['div', { style: 'padding:12px' }, [
  ['div', { style: 'border-radius:2px;background:#fff;box-shadow:0 2px 4px 0 #dbdddf;overflow:hidden' }, [
    ['div', { style: 'background:#f3f5f7' }, [
      ['img', { src: data.image, style: 'max-width: 100%' }, null]
    ]],
    ['div', { style: 'padding:16px 24px' }, [
      ['div', { style: 'text-align:center' }, [
        ['div', { style: 'margin:0;padding:0 0 6px;font-size:18px' }, data.title, null],
        ['div', { style: 'margin:0;padding:0 0 12px;font-size:14px' }, data.tagline, null]
      ]],
      ['div', { style: 'padding:0 0 12px;font-size:14px' }, data.content, null],
      ['div', { style: 'text-align:center' }, [
        ['a', { href: data.url, style: 'display:inline-block;padding:12px 18px;border-radius:2px;color:#fff;text-decoration:none;background:#df1f3f' }, 'Click Here to Learn More', null]
      ]]
    ]]
  ]]
]]

function listings (data) {
  const listings = []
  for (let i = data.length; i--;) {
    listings[i] = listing(data[i])
  }
  return listings
}

const page = data => ['html', { lang: 'en' }, [
  ['body', { style: 'margin:0;font-family:sans-serif;background:#ebedef' }, [
    ['div', { style: 'max-width:600px;margin:auto;padding:12px' }, [
      ['div', { style: 'padding:12px' }, [
        ['div', { style: 'height:192px;border-radius:2px;background:#212325;overflow:hidden' }, null]
      ]],
      // listings(data)
    ]]
  ]]
]]

fs.writeFile('email.html', createElement(page(data)), (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})
