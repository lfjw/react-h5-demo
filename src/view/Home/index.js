import React, { Component, Fragment } from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeLessons from './components/HomeLessons';

import { connect } from "react-redux";
import actions from '../../store/actions'
import './index.less'
import { loadMore, downRefresh } from '../../utils';

// 第一种写法 装饰器兼容性不太友好，不建议使用
// @connect(
//     state => state.home
// )
// export default class Home extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <HomeHeader />home
//             </Fragment>
//         )
//     }
// }

// 第二种写法
class Home extends Component {
  componentDidMount() {
    // redux 调用轮播图
    this.props.getSliders()
    // redux 调用课程列表
    this.props.getLessons()
    // 上拉加载
    loadMore(this.mainContent, this.props.getLessons);
    // 下拉刷新
    downRefresh(this.mainContent, this.props.refreshLessons);
  }
  render() {
    let { category, changeCategory, sliders, lessons } = this.props
    return (
      <Fragment>
        {/* category 输入   仓库中的分类取出来赋值给HomeHeader */}
        {/* changeCategory 输出  HomeHeader 可以调用changeCategory 改变分类*/}
        <HomeHeader
          category={category}
          changeCategory={changeCategory} />
        <div className='main-content' ref={ref => this.mainContent = ref}>
          <HomeSwipe sliders={sliders} />
          <HomeLessons lessons={lessons} />
        </div>
      </Fragment>
    )
  }
}
// 仓库的拿到值
// 值派发给仓库
// actions 当前组件的属性对象
export default connect(state => state.home, actions)(Home)