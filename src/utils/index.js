

/**
 * 上拉加载
 * @param {*} element 实现此功能的DOM对象
 * @param {*} callback 加载更多的方法
 */
export function loadMore(element, callback) {

  let timer; // 防抖功能
  element.addEventListener('scroll', () => {
    timer && clearTimeout(timer)

    timer = setTimeout(function () {
      // 可视区高度
      let clientHeight = element.clientHeight
      // 滚动高度
      let scrollTop = element.scrollTop
      // 内容高度
      let scrollHeight = element.scrollHeight

      if (clientHeight + scrollTop + 10 >= scrollHeight) {
        callback()
      }
    }, 300)

  })


}




/**
 * 下拉刷新
 * @param {*} element 
 * @param {*} callback 
 */
export function downReferesh(element, callback) {
  let startY; //刚按下的时候，初始坐标
  let distance; //下拉的距离
  let originTop = element.offsetTop; // 最初的距离父级顶部的距离

  element.addEventListener('touchstart', function (event) {

    // 回弹过程中在拉不生效
    if(element.offsetTop !== originTop){
      return 
    }

    // 滑动半截，下拉出问题
    if(element.scrollTop !== 0){
      return
    }

    startY = event.touches[0].pageY;

    element.addEventListener('touchmove', touchmove)
    element.addEventListener('touchend', touchend)

    function touchmove(event) {
      //上拉处理 下拉不处理
      let pageY = event.touches[0].pageY;

      if (pageY > startY) {
        // 越来越大，表示下拉
        distance = pageY - startY
        element.style.top = originTop + distance + 'px'
      } else {
        element.removeEventListener('touchmove', touchmove)
        element.removeEventListener('touchend', touchend)
      }
    }
    // 松手弹回去
    function touchend() {
      element.removeEventListener('touchmove', touchmove)
      element.removeEventListener('touchend', touchend)
      // 每隔13毫秒回弹
      let timer = setInterval(() => {
        if (distance < 1) {
          element.style.top = originTop + 'px'
          clearInterval(timer)
        } else {
          element.style.top = originTop + (--distance) + 'px'
        }

      }, 13);

      // element.style.transition = 'all 1s ease-in';
      // element.style.top = originTop + 'px'
      if (distance > 30) {
        callback()
      }
    }
  })
}