export default (context, inject) => {
  inject('writeData', async (path, data) => {
    try {
      const ref = context.$fire.database.ref(path)
      await ref.set(data)
    } catch (e) {
      return 'error'
    }
  })
  inject('readData', async (path) => {
    try {
      const ref = context.$fire.database.ref(path)
      const snapshot = await ref.once('value')
      return snapshot.val()
    } catch (e) {
      return 'error'
    }
  })
}