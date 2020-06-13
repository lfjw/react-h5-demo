import React, { Component, Fragment } from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';

import { connect } from "react-redux";
import actions from '../../store/actions'
import './index.less'

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
    }, 1000);
  }
  render() {
    let { category, changeCategory, sliders } = this.props
    return (
      <Fragment>
        {/* category 输入   仓库中的分类取出来赋值给HomeHeader */}
        {/* changeCategory 输出  HomeHeader 可以调用changeCategory 改变分类*/}
        <HomeHeader
          category={category}
          changeCategory={changeCategory} />
        <div className='main-content'>
          <HomeSwipe sliders={sliders}></HomeSwipe>
        </div>
      </Fragment>
    )
  }
}
// 仓库的拿到值
// 值派发给仓库
// actions 当前组件的属性对象
export default connect(state => state.home, actions)(Home)