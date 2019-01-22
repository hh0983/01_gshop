/*
*包含n个接口请求函数的模块
*函数的返回值:promise对象
*/

//引入ajax函数
import ajax from './ajax'

//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

//ajax传参的样例：http://localhost:3000/position/40.10038,116.36867
//1、根据经纬度获取位置详情(精度 纬度) 
//export const reqAddress = (geohash) => ajax(`/api/position/`+ geohash)
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)


//2、获取食品分类列表
export const reqFoodTypes = () => ajax(BASE_URL+'/index_category')

//3、根据经纬度获取商铺列表(最好传对象，把属性外面放上{}，就可以)
export const reqShops = ({longitude,latitude}) => ajax(BASE_URL+'/shops',{longitude,latitude})

//4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops',{geohash, keyword})

//5、获取一次性验证码

//6、用户名密码登录
export const reqPwdLogin = (name,pwd,captcha) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

//7、发送短信验证码 
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone});

//8、手机号验证码登录
export const reqSmsLogin = (phone,code) =>ajax(BASE_URL+'/login_sms',{phone,code},'POST')

//9、获取用户信息(根据会话)
export const reqUser = () => ajax(BASE_URL+'/userinfo')

//10、用户退出
export const reqLogout = () =>ajax(BASE_URL+'/logout')

//获取商家信息
export const reqShopInfo = () => ajax('/info')

//获取商家评价数组
export const reqShopRatings = () => ajax('ratings')

//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')


