import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './index.less';

export default class HomeHeader extends Component {
  state = {
    show: false
  }
  changeCategory = (event) => {
    const category = event.target.dataset.cattegory
    this.props.changeCategory(category)
    this.setState({ show: false })
    this.props.refreshLessons()
  }
  render() {
    let { show } = this.state;
    return (
      <div className='home-header'>
        <div className='header-box'>
          <div className='icon'>icon</div>
          <div className='list' onClick={() => this.setState({ show: !show })}>
            {
              show ? 'X' : '列表'
            }
          </div>
        </div>

        <TransitionGroup className='home-menus'>
          {show && (
            <CSSTransition timeout={500} className='fade'>
              <ul onClick={this.changeCategory}>
                <li data-cattegory='react' className={this.props.category === 'react' ? 'active' : ''}>react</li>
                <li data-cattegory='vue' className={this.props.category === 'vue' ? 'active' : ''}>vue</li>
              </ul>
            </CSSTransition>
          )}
        </TransitionGroup>

      </div>
    )
  }
} 