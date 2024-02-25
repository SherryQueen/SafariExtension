const replaceUrls = {
  'www.aliyundrive.com': 'www.alipan.com',
};

// 按照配置的规则, 对域名进行替换
browser.webNavigation.onBeforeNavigate.addListener((details) => {
  const keys = Object.keys(replaceUrls);
  for (const key of keys) {
    if (details.url.includes(key)) {
      const newURL = details.url.replace(key, replaceUrls[key]);
      browser.tabs.update(details.tabId, { url: newURL });
    }
  }
});
