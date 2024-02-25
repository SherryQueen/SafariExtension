// ==UserScript==
// @name         从豆瓣影视直接跳转阿里搜
// @author       56
// @match        *://movie.douban.com/subject/*
// @description 安装脚本后豆瓣电影标题旁会显示阿里云的logo，点击就可以跳转到阿里搜搜索影视资源了。
// ==/UserScript==

(function () {
  var host = location.hostname;
  if (host === 'movie.douban.com') {
    const title = encodeURIComponent(
      document
        .querySelector('title')
        .innerText.replace(/(^\s*)|(\s*$)/g, '')
        .replace(' (豆瓣)', ''),
    );
    const subjectwrap = document.querySelector('h1');
    const subject = document.querySelector('.year');
    if (!subjectwrap || !subject) {
      return;
    }
    const sectl = document.createElement('span');
    subjectwrap.insertBefore(sectl, subject.nextSibling);
    sectl.insertAdjacentHTML(
      'beforebegin',
      `<style>.cupfox{vertical-align: middle;}.cupfox:hover{background: #fff!important;}</style>
          <a href="https://yunpan1.cc/?q=${title}" class="aliso" target="_blank"><img style="width:24px;height:24px" src="https://img.alicdn.com/imgextra/i2/O1CN011vHpiQ251TseXpbH7_!!6000000007466-2-tps-120-120.png" ></a>`,
    );
  }
})();
