var LazyImg = document.querySelectorAll('img[data-src]');
var LazyImgSrcSet = document.querySelectorAll('img[data-srcset]');

var rootconfig = {
  root: null,
  rootMargin: '760px 0px',
};

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var Observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        if (entry.target.getAttribute('data-src')) {
          entry.target.src = entry.target.getAttribute('data-src')
        }
        if (entry.target.getAttribute('data-srcset')) {
          entry.target.setAttribute('srcset', entry.target.getAttribute('data-srcset'))
        }
        Observer.unobserve(entry.target);
      }
    });
  },
  rootconfig
);

LazyImg.forEach(function(el) {
  Observer.observe(el);
});

LazyImgSrcSet.forEach(function(el) {
  Observer.observe(el);
});
