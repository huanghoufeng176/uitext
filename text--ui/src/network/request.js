import axios from 'axios'

export function request(config){
  return new Promise((resolve,reject)=>{
    //1.创建实例
    const instance=axios.create({
      baseURL:'https://www.liulongbin.top:8888/api/private/v1/',
      timeout:5000
    })
    instance(config).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}