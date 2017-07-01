import riot from 'riot'

import '../app/tag/home.tag'
import '../app/tag/checkFirebase.tag'

import routes from '../app/route.js'

routes.start(true)

describe('karma-riot specs', function() {

  it('mounts home tag', function() {
    var html = document.createElement('home')
    document.body.appendChild(html)
    riot.mount('home')
    expect(document.querySelector('home > div > p').textContent.indexOf('home'))
      .to.not.be(-1)
  })
  
  it('mounts checkFirebase tag', function() {
    var html = document.createElement('checkFirebase')
    document.body.appendChild(html)
    riot.mount('checkFirebase')
    expect(document.querySelector('checkFirebase > div > p#load').textContent.indexOf('database')).to.not.be(-1)
  })

})

