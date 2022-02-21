import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default ({ route, redirect }) => {
  const cabinetId = route.params.id
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        if (user.uid !== cabinetId) {
          redirect('/')
        }
      } else {
        redirect('/')
      }
    })
}