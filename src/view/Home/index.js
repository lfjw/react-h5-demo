import React, { Component, Fragment } from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeLessons from './components/HomeLessons';

import { connect } from "react-redux";
import actions from '../../store/actions'
import './index.less'
import { loadMore,downReferesh } from '../../utils';

// 第一种写法 高级语言，不建议使用
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
    setTimeout(() => {
      this.props.getSliders()
      this.props.getLessons()
    }, 1000);


    loadMore(this.mainContent, this.props.getLessons);
    
    downReferesh(this.mainContent, this.props.refreshLessons);
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