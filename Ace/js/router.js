const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>Home5555</p>' }
const Company = { template: '<p>Company page</p>' }
const News = { template: '<p>News page</p>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Company }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#banner')

console.log(window.location.pathname)