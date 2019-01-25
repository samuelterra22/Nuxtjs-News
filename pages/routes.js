const Home = () => import('./Home').then(m => m.default || m)

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]
