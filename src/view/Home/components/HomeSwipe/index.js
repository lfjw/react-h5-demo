
import React, { Component } from 'react';
import './index.less';
import ReactSwipe from 'react-swipe';

export default class HomeSwipe extends Component {

  state = {
    index: 0
  }
  render() {
    let swipeOptions = {
      continuous: false,
      callback: function (index) {
        // TODO 显示不正确
        this.setState({ index: index })
      }.bind(this)
    }
    let { sliders } = this.props
    return (

      <div className='home-swipe'>
        {
          sliders.length > 0 ?
            (
              <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                {
                  sliders.map((item, index) => (
                    <div key={index}>
                      <img src={item} />
                      {/* {index} -- {
                         this.state.index
                      } */}
                    </div>
                  ))
                }
              </ReactSwipe>
            ) : null
        }

        <div className='dots'>
          {
            sliders.map((item, index) => (
              <span key={index} className={`dot ${index === this.state.index ? 'active' : ''}`}></span>
            ))
          }
        </div>
      </div>
    )
  }
}