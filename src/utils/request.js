// import axios from "axios";
// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'Content-Type': 'application/json'}
// });
// export default instance

import axios from 'axios';

// 创建axios实例
const axiosInstance = axios.create();

// 添加一个响应拦截器
axiosInstance.interceptors.response.use(
  // 处理响应成功的函数
  response => {
    // 假设后端API返回的数据格式如下：
    // {
    //   "items": [...], // 当前页的数据列表
    //   "totalItems": 100 // 总数据量
    // }

    const items = response.data.items;
    const totalItems = response.data.totalItems;

    // 从请求参数中获取当前页码和每页大小
    const page = response.config.params.page || 1;
    const size = response.config.params.size || 10;

    // 计算总页数
    const totalPages = Math.ceil(totalItems / size);

    // 重组响应数据，包含分页信息
    const paginatedData = {
      items, // 当前页的数据列表
      totalItems, // 总数据量
      page, // 当前页码
      size, // 每页大小
      totalPages, // 总页数
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    };

    // 返回重组后的数据
    return paginatedData;
  },
  // 处理响应失败的函数
  error => {
    // 这里可以处理请求错误，例如重试逻辑、错误提示等
    return Promise.reject(error);
  }
);

// 使用axios实例进行请求
axiosInstance.get('/your-api-endpoint', {
  params: {
    page: 1,    // 当前页码，可以由用户输入或前端逻辑确定
    size: 10,   // 每页大小，可以由用户选择或前端逻辑确定
  }
}).then(paginatedResponse => {
  // 处理分页后的数据
  console.log(paginatedResponse);
}).catch(error => {
  // 处理错误
  console.error(error);
});

