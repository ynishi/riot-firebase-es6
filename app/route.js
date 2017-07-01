import riot from 'riot'
import route from 'riot-route'

route('/home', function() {
    riot.mount('content', 'home')
})

export default route
