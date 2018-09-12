let defaultCity = {};
defaultCity['name'] = '上海'
try {
  if (localStorage.getItem('cityObj')) {
    defaultCity = JSON.parse(localStorage.getItem('cityObj'))
  }
} catch (e){

}
export default {
  cityObj: defaultCity
}