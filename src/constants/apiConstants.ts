import { Route } from '../types'

const ROUTES: Route = {
  users: {
    index: 'users',
    friends: `/users/friends`,
    profile: '/users/profile',
    views: '/users/profile/views',
  },
  store: {
    index: 'store',
  },
}

export { ROUTES }
