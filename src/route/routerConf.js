
import { HeaderLabel } from '../components/index'


import App from '../views/App'
import Pins from '../views/pins/index'
import TimeLine from '../views/timeLine/index'
import Topic from '../views/topic/index'
import Book from '../views/book/index'
import Active from '../views/active/index'


const routerConfig = [
  { path: '/timeline', component: TimeLine },
  { path: '/timeline/:type', component: TimeLine },

  { path: '/pin', component: Pins },
  { path: '/topic', component: Topic },
  { path: '/book', component: Book },
  { path: '/active', component: Active }

]


export default routerConfig