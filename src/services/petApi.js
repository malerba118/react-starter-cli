let _examplePrivateVariable = 0

const petApi = {
  getExamplePrivateVariable: () => {
    return _examplePrivateVariable
  },
  setExamplePrivateVariable: (n) => {
    _examplePrivateVariable = n
  }
}

Object.freeze(petApi)

export default petApi
