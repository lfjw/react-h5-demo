import React, { Component } from 'react'
import './index.less';
import NavHeader from '../../components/NavHeader'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
//  detail 是由路由渲染出来的话，会有三个属性 history location match
// 不需要用withRouter包裹
// 什么时候需要用withRouter包裹呢，如果一个组件不是由路由渲染出来的话，需要用withRouter包裹
// 这个就是路由包裹 <Route exact path='/' component={Home}></Route>
// TODO 了解withRouter
class Detail extends Component {
  state = {
    lesson: this.props.location.state || {}
  }

  componentDidMount() {
    let lesson = this.props.location.state;
  
    if (!lesson || !lesson.title) {
      //let id = this.props.match.params.id;
      // 获取id调用接口
    }
  }
  render() {

    let { lesson } = this.state;
    return (
      lesson ? (<div className='lesson-detail'>
        <NavHeader title='课程详情'></NavHeader>
        <img src={lesson.poster} alt='1'></img>
        <p>{lesson.title}</p>
        <p>{lesson.price}</p>
      </div>
      ) : <Redirect to='/'></Redirect>
    )
  }
}


export default connect()(Detail)









