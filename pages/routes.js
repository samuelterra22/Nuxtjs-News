const Home = () => import('./index').then(m => m.default || m)
const Chat = () => import('./whatsapp').then(m => m.default || m)

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]
