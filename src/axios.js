import axios from "axios";

class HttpRequest {
  constructor() {
    this.baseUrl = "/";
    this.timeout = 3000;
    this.queue={}//可用于全局loading的处理
  }
  setInterceptor(instance,url){
    instance.interceptors.requert.use((config)=>{
      if(Object.keys(this.queue).length == 0){
       // 开启loading
      }
      let CancelToken =axios.CancelToken // 记录请求的取消函数
      // xhr.abort()
      config.cancelToken = new CancelToken((c)=>{
      //c就是当前取消请求的token
      //store.commit(Types.SET_TOKEN,c);//利用vuex state.tokens = [...state.tokens,token]
      // 同步将取消方法存入到vuex中,记录每次请求的token，
      // 例：在路由切换的时候取消当前页面请求，则在路由切换（路由守卫）中清空token
      // state.tokens.forEach(token=>token()); // 执行所有的取消方法，都调用一下
      // state.tokens = []; // 清空列表
      })

      this.queue[url]=true // 记录每次请求
    return config
    })


    instance.interceptors.response.use((res)=>{
    delete this.queue[url] // 一旦响应就从队列中删除
    if(Object.keys(this.queue).length == 0){
      // close loading
            }
      return res.data.data

    },(err)=>{
      delete this.queue[url]
      return Promise.reject(err)
    })
  }
  requert(options) {
    // 通过request方法进行请求操作
    // 创建一个新的实例，如果业务不复杂可以不创建实例，直接使用axios
  let instance =axios.create()
  let config={
    baseUrl=this.baseUrl,
    timeout=this.timeout,
    ...options
  }
this.setInterceptor(instance,config.url) // 拦截器
  return instance(config) // 产生一个promise
  }
  // axios.get('/api/list',{param:{}})
  get(url, data = {}) {
    return this.requert({
      url,
      method:'get',
      ...data
    })
  }
  post(url,data={}) {
    return this.requert({
      url,
      method:'post',
      ...data
    })
  }
}

export default new HttpRequest();
