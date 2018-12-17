import axios from 'axios'

/**
 * Get cookie from request.
 *
 * @param  {Object} req The request
 * @param  {String} key The key
 * @returns {String|undefined}  Return the cookie
 */
export function cookieFromRequest(req, key) {
  if (!req.headers.cookie) {
    return
  }

  const cookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`))

  if (cookie) {
    return cookie.split('=')[1]
  }
}

/**
 * See more in https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param {Object}  to  Reference position initial
 * @param {Object}  from  Reference position final
 * @param {Object}  savedPosition The position saved
 *
 * @returns {Object} Return position
 */
export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  let position = {}

  if (to.matched.length < 2) {
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    position = { x: 0, y: 0 }
  }
  if (to.hash) {
    position = { selector: to.hash }
  }

  return position
}

/**
 * Verify if the object is empty
 *
 * @param {Object} obj  Object to verify
 * @returns {Boolean} Return true if the object is empty
 */
export function empty(obj) {
  if (obj === true) return false
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

/**
 * Method similar the range in python
 *
 * @param  {Integer} start First position of array
 * @param  {Integer} end  Last posisiton of arry
 * @returns {Array} Return a array with start - end length
 */
export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx)
}

/**
 * Method to get geolocation details
 *
 * @returns {Object} Return a object with geolocation details
 */
export async function getGeoDetails() {
  return await axios
    .get(
      `${'https://cors-anywhere.herokuapp.com/'}http://gd.geobytes.com/GetCityDetails`
    )
    .then(({ data }) => {
      return data
    })
}

/**
 * Returns the base number according to the accuracy
 *
 * @param {int} d A date
 * @returns {Boolean} Return true if is a valid date
 * */
export function isValidDate(d) {
  return d instanceof Date && !isNaN(d)
}

/**
 * Returns the maximum value from array
 *
 * @param {array} array Data array
 * @returns {number} Return max value
 * */
export function max(array) {
  return Math.max.apply(null, array)
}

/**
 * Returns the minimum value from array
 *
 * @param {array} array Data array
 * @returns {number} Return min value
 * */
export function min(array) {
  return Math.min.apply(null, array)
}
