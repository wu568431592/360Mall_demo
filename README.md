# 360 mall demo

> 360 mall demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#服务器设置
项目文件中的dist 文件夹 设置为服务器 可以安装 xampp qampp 等Apache 服务器，并将服务器地址设置为本项目的dist文件夹下。
修改 Apache 服务器配置 文件 httpd.conf 在文件尾部添加以下代码
#
      <Directory />
      #对所有域名开放
      Header set Access-Control-Allow-Origin *

      </Directory>
使得 apache服务器 支持跨域请求。

