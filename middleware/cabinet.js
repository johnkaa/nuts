export default ({ app, route, redirect }) => {
  const cabinetId = route.params.id
  const userId = app.$fire.auth.currentUser.uid
  if(cabinetId !== userId) {
    redirect('/')
  }
}
