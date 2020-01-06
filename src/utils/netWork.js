import axios from 'axios'



export default function netWork(apiUrl, options) {
  const { 
    method = 'GET',
    data = {},
    params = {},
    timeout = 60000
  } = options

  const headers = {
    'Content-Type': 'application/json'
  }


  return new Promise((resolve, reject) => {

    


    axios({
      headers,
      method,
      url: apiUrl,
      params,
      data,
      timeout,
      responseType: 'json'
    }).then(res => {
      if(res) {
        const { 
          data = {},
          status = 200,
          statusText = 'ok',
          headers = {},
          config = {},
          request = {}
        } = res;
        resolve(data)
      }else {
        reject(res)
      }
    }).catch(err => {
      console.log('request failer', err);
      reject(err)
    })
  })
}