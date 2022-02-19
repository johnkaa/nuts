export default function ({ app, redirect }) {
  setTimeout(() => {
    if (app.$fire.auth.currentUser) {
      redirect('/')
    }
  }, 1000)
}
