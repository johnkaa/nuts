import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default ({ redirect }) => {
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        if (user.uid !== '9qQGy4TbmBdtHX1wMOUDbjzCmr83') {
          redirect('/')
        }
      } else {
        redirect('/')
      }
    })
}
