export default {
  changecity(state, city) {
    state.cityObj = city;
    try {
      localStorage.setItem('cityObj', JSON.stringify(city))
    } catch (e) {}

  }
}
