import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default ({ redirect }) => {
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user !== null) {
        redirect('/')
      }
    })
}