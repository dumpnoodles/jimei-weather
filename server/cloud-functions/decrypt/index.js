const API_URL = 'xxxxxx'
const request = require('request')
/*<jdists import="../../inline/utils.js" />*/

/*<remove>*/
const $ = require('../../inline/utils')
/*</remove>*/

exports.main = async (event) => {
  const data = {
    appid: appid,
    secret: secret,
    js_code: code,
    grant_type: 'authorization_code'
  }
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(error)
      } else {
        try {
          const r = JSON.parse(body)
          resolve(r.data)
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}
