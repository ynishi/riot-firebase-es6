import riot from 'riot'

import './tag/home.tag'
import './tag/checkFirebase.tag'
import routes from './route.js'

riot.mount('checkFirebase')

routes.start(true)

