import React, { Component } from 'react';
import Loading from '../../../../components/Loading';

import './index.less';

export default class HomeLessons extends Component {
  render() {
    let { list, hasMore, loading } = this.props.lessons
    return (
      <div className='home-lessons'>
        <div className='all-lessons'>
          <i>图标</i>
          <span>全部课程</span>
        </div>

        {
          list.length > 0 ? list.map((item, index) => (
            <div key={index} className='lessons'>
              <img src={item.poster} alt='图片'></img>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          )) : '暂无数据'
        }
        {/* TODO 加载图标没有实现 */}
        {
          loading ? <Loading></Loading> : <div className='loading-more' onClick={this.props.getLessons}>
            {hasMore ? "点击加载更多" : "到底了"}
          </div>
        }

      </div>


    )
  }
}
