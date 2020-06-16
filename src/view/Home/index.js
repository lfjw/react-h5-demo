import React, { Component, Fragment } from 'react'
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeLessons from './components/HomeLessons';

import { connect } from "react-redux";
import actions from '../../store/actions/home'
import './index.less'
import { loadMore, downRefresh } from '../../utils';

class Home extends Component {
  componentDidMount() {
    this.props.getSliders() // 调用轮播图
    this.props.getLessons() // 课程列表
    // 上拉加载
    loadMore(this.mainContent, this.props.getLessons);
    // 下拉刷新
    downRefresh(this.mainContent, this.props.refreshLessons);
  }
  render() {
    let { category, changeCategory, sliders, lessons, refreshLessons } = this.props
    return (
      <Fragment>
        <HomeHeader
          category={category}
          changeCategory={changeCategory}
          refreshLessons={() => {
            // 切换滚动到顶部
            this.mainContent.scrollTop = 0;
            refreshLessons()
          }} />
        <div className='main-content' ref={ref => this.mainContent = ref}>
          <HomeSwipe sliders={sliders} />
          <HomeLessons lessons={lessons} />
        </div>
      </Fragment>
    )
  }
}
export default connect(state => state.home, actions)(Home)