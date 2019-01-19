/**
 *ajax请求函数模块
 *返回值：promise对象(异步返回的数据是：response.data)
 */
import axios from 'axios'
export default function ajax (url,data={},type='GET'){
    //执行异步ajax请求
    return new Promise(function (resolve, reject) {

        let promise //声明一个promise对象
        if (type === 'GET') {

            // 准备 url query 参数数据
            let dataStr = '' //声明数据拼接字符串

            //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 
            Object.keys(data).forEach(
                key => {
                   dataStr += key + '=' + data[key] + '&'
                   console.log(dataStr);
                }
            )

            if (dataStr !== '') {
                //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                console.log(dataStr);
                url = url + '?' +dataStr
            }

            //发送get请求
            promise = axios.get(url)

        }else{
            //发送post请求
            promise = axios.post(url,data)
        }
       //axios的返回值就是 response
        promise.then(response => {

            //.then成功的回调  resolve() 
            resolve(response.data)
            //const result = response.data
        }).catch(error => {

            //.catch失败的回调reject()
            reject(error)

        })

     })  
  /**
 *
 *const response = await ajax()
 *const result = response.data
 *const result = await ajax()
 */
        
} 