import axios from "axios";
// 创建axios实例
const axiosInstance = axios.create();

// 添加一个响应拦截器来处理错误
axiosInstance.interceptors.response.use(
  // 这个函数会在请求成功时被调用
  response => {
    // 对成功的响应进行处理，例如可能需要在这里处理非业务逻辑错误
    return response;
  },
  // 这个函数会在请求失败时被调用
  error => {
    // 从error对象中提取axios的响应
    const response = error.response;

    // 这里可以根据响应的状态码进行不同的错误处理
    if (response) {
      // 请求已发出，但服务器响应了错误的状态码
      // 可以在这里根据响应的状态码进行不同的错误处理
      switch (response.status) {
        case 400:
          // 处理400错误，例如请求参数错误
          console.error('错误：请求参数不正确');
          break;
        case 401:
          // 处理401错误，例如未授权
          console.error('错误：未授权，请重新登录');
          break;
        case 403:
          // 处理403错误，例如禁止访问
          console.error('错误：禁止访问');
          break;
        case 404:
          // 处理404错误，例如资源未找到
          console.error('错误：资源未找到');
          break;
        case 500:
          // 处理500错误，例如服务器内部错误
          console.error('错误：服务器内部错误');
          break;
        default:
          console.error(`错误：${response.status}`);
      }
    } else {
      // 处理没有响应的情况，例如网络错误
      console.error('错误：请求失败，无法建立连接');
    }

    // 可以根据业务需求返回一个可操作的错误对象或者错误信息
    // 这里我们选择抛出一个包含错误信息的Promise.reject
    return Promise.reject(new Error(response ? response.data.message : '未知错误'));
  }
);

// 使用axios实例进行请求
axiosInstance.get('/your-api-endpoint').then(response => {
  // 处理响应数据
  console.log(response.data);
}).catch(error => {
  // 处理错误
  console.error(error);
});