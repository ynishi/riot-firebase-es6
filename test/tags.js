import riot from 'riot'

import '../app/import_tags'
import routes from '../app/route.js'

// prepare base document
var content = document.createElement('content')
document.body.appendChild(content)

describe('karma-riot specs', function() {

  it('mounts home tag', function() {
    routes('home')
    expect(document.querySelector('content > div > p').textContent.indexOf('home'))
      .to.not.be(-1)
  })
  
  it('mounts checkFirebase tag', function() {
    var html = document.createElement('checkFirebase')
    document.body.appendChild(html)
    riot.mount('checkFirebase')
    expect(document.querySelector('checkFirebase > div > p#load').textContent.indexOf('database')).to.not.be(-1)
  })

})

