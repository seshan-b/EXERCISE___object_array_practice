module.exports = {
  displayListenerNames,
  displayListenerNameAndGenre,
  displayArtistNames,
  getId,
  releasesByArtist,
  getGenreByArtist,
  getReleaseByArtistGenre,
  DisplayReleaseNameOfAllListeners
}

// 1. Display the names of all of the listeners
function displayListenerNames (arrObjFile) {
  const listenerNames = [] // Create the empty array to push into.

  for (const listener of arrObjFile) {
    listenerNames.push(listener.name)
    // Object File get the whole object which we are passed as a dummy param
    // console.log(arrObjFile)
  }

  return listenerNames
}
