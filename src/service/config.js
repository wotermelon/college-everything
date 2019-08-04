const devURL = "http://localhost:3000"; // 测试环境
const prodURL = 'todo'; // 生产环境，线上服务器

const BASE_URL = process.env.NODE_ENV === 'development' ? devURL : prodURL

export default BASE_URL
