<<<<<<< HEAD
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default ({ redirect }) => {
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(!user) {
        redirect('/')
      }
    })
}
=======
export default function ({ app, redirect }) {
  setTimeout(() => {
    if (app.$fire.auth.currentUser) {
      redirect('/')
    }
  }, 1000)
}
>>>>>>> 733ff0005b7b9c1ca8508cd31d63c8b34c99abfe
