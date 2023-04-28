const validateLocalStorage = () => {
    const details = JSON.parse(localStorage.getItem('Chatafisha'))
    if (details) {
      if (details.token && details.name) {
        return details
      }
    }
    return null
  }
  export default validateLocalStorage