const validateLocalStorage = () => {
    const user_details = JSON.parse(localStorage.getItem('Chatafisha'))
    if (user_details) {
      if (user_details.token) {
        return user_details
      }
    }
    return null
  }
  export default validateLocalStorage