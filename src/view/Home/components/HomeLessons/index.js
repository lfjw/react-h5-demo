import React, { Component } from 'react';
import Loading from '../../../../components/Loading';
import './index.less';
import { Link } from 'react-router-dom';

export default class HomeLessons extends Component {
  render() {
    const { list, hasMore, loading } = this.props.lessons

    const isBottomEmptyDiv = !hasMore && <span>到底了</span>
    const isBottomDiv = list.length > 0 && isBottomEmptyDiv;
    const isTopListDiv = list.map((item, index) => (
      // 通过state刷新就完蛋
      // 所以传递一个参数
      <Link to={{ pathname: `/detail/${item.id}`, state: item }} key={index}>
        <div key={index} className='lessons'>
          <img src={item.poster} alt='图片'></img>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      </Link>
    ))
    const isTopDiv = list.length > 0 ? isTopListDiv : <div>暂无数据</div>

    return (
      <div className='home-lessons'>
        <div className='all-lessons'>
          <i>图标</i>
          <span>全部课程</span>
        </div>

        {
          isTopDiv
        }

        {/* {
          loading ? <Loading /> : <div className='loading-more' onClick={this.props.getLessons}>
            {hasMore ? "点击加载更多" : "到底了"}
          </div>
        } */}

        {
          loading ? <Loading /> : isBottomDiv
        }


      </div>


    )
  }
}
