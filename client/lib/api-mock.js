import Promise from './bluebird'
const QQ_MAP_KEY = 'xxxxxxx'

/**
 *  逆经纬度查询
 * @param {*} lat
 * @param {*} lon
 */
export const geocoder = (lat, lon, success = () => {}, fail = () => {}) => {
  return wx.request({
    url: 'xxxxxx',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success: success,
    fail: fail
  })
}

export const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'xxxxxx',
      data: {
        lat,
        lon
      },
      success: (res) => {
        resolve({result: res.data})
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

export const jscode2session = (code) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'xxxxxxx',
      data: {
        code
      },
      success: (res) => {
        resolve({result: res.data})
      },
      fail: reject
    })
  })
}
export const getAir = (city) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'xxxxxxx',
      data: {
        city
      },
      success: (res) => {
        resolve({result: res.data})
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}
