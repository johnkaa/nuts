export default (context, inject) => {
  inject('uploadImg', async (file, path) => {
    try {
      const snapshot = await context.$fire.storage
        .ref()
        .child(path)
        .put(file)
      return await snapshot.ref.getDownloadURL()
    } catch (e) {
      return 'error'
    }
  })
}