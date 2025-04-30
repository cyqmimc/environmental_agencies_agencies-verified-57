# Global Environmental Agencies Dashboard

一个可视化页面，展示全球环保部门信息及 PM2.5 数据。

## 📁 项目结构

```
global-environmental-agencies/
├── index.html               # 主页面，挂载 Vue 应用
├── js/
│   ├── app.js               # Vue 应用逻辑（建议补充或拆分）
│   ├── dataLoader.js        # 数据加载逻辑（预留）
│   ├── config.js            # 配置常量（预留）
├── data/
│   ├── countries.json       # 各国环保部门数据
│   ├── pm25.json            # PM2.5 年度数据
├── styles/
│   └── main.css             # 自定义样式
```

## 🚀 使用方式

1. 使用本地服务器或部署至静态托管平台（如 GitHub Pages、Vercel）：
    - 本地：`npx serve` 或 `python3 -m http.server`
    - 在线部署：直接拖入

2. 打开浏览器访问 `index.html`，默认加载地图和国家信息表格。

## 🔧 后续可扩展

- 增加数据字段：如碳排放、人均排放、能源占比等；
- Vue 组件化拆分：拆分地图、表格、弹窗模块；
- 数据更新机制：通过脚本定期拉取外部数据或后台表单更新。

- ### ✅ 核心功能

  

  | 功能                      | 是否保留 | 备注                       |
  | ------------------------- | -------- | -------------------------- |
  | 🌍 地图展示（ECharts）     | ✅        | 带 PM2.5 值与缩放交互      |
  | 🏳 国家国旗显示            | ✅        | 通过 `flagcdn` 加载        |
  | 🔍 搜索/筛选国家或环保部门 | ✅        | `v-model` 实现             |
  | 🌐 地区筛选                | ✅        | `regionFilter` 实现        |
  | 📤 导出 Excel              | ✅        | 当前页数据导出             |
  | 🖼 导出地图 PNG            | ✅        | 使用 `getDataURL()`        |
  | 📄 导出地图 PDF            | ✅        | 使用 `html2canvas + jsPDF` |
  | 📊 表格排序（国家、PM2.5） | ✅        | `sortKey + sortAsc` 控制   |
  | 📄 数据分页                | ✅        | 每页 50 条，可切页         |
  | 🪪 弹窗详情                | ✅        | 包含官网、语言、PM2.5      |
  | 🌐 点击地图跳转官网        | ✅        | `onClick` 实现官网跳转     |
  | 📜 数据来源页脚            | ✅        | 保留了 WHO 和官网说明      |

  ------

  ### 🗂️ 后续可部署结构

  

  ```
  
  
  复制编辑
  📁 global-environmental-agencies/
  ├── 📄 index.html              ✅ 页面入口（已确认）
  ├── 📁 js/
  │   ├── app.js                ✅ Vue 应用逻辑
  │   ├── map.js                ✅ ECharts 地图逻辑
  │   ├── table.js              ✅ 表格处理逻辑
  │   └── modal.js              ✅ 弹窗逻辑
  ├── 📁 data/
  │   ├── countries.json        ✅ global_environmental_agencies_final_with_language.json
  │   └── pm25.json             ✅ who_pm25_latest_with_year.json
  ├── 📁 assets/
  │   └── flags/                ⚠️ 可选缓存目录（CDN 正常可跳过）
  ├── 📁 styles/
  │   └── tailwind.css          ⚠️ 如需定制 Tailwind 可补充
  └── 📄 README.md              ✅ 描述数据来源与结构
  ```

  ## 自动更新新闻数据方案（Node.js + Axios + Cheerio）

  ### 📁 项目结构建议：

  ```
  kotlin
  
  
  复制编辑
  project-root/
  ├── data/
  │   └── news.json           ← 自动更新的文件
  ├── scripts/
  │   └── updateNews.js       ← 爬虫脚本
  ├── cronjob.sh              ← 每天定时运行的 shell
  ```