// ==UserScript==
// @name         自用去广告元素
// @author       56
// @match        *
// @description  默认删除所有带 ad 的元素
// ==/UserScript==
(function () {
  function clear() {
    removeAds('google ads', '.adsbygoogle');
  }
  clear();
  setTimeout(clear, 1000);

  function removeAds(type, cls) {
    const ads = document.querySelectorAll(cls);
    console.info(`remove ${type} with ${cls}: ${ads.length}`);
    ads.forEach((item) => {
      item.parentElement.removeChild(item);
    });
  }
})();
