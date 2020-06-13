
import React, { Component } from 'react';
import './index.less';
import ReactSwipe from 'react-swipe';

export default class HomeSwipe extends Component {

  state = {
    index: 0,
    swipeOptions: {
      continuous: false,
      callback: (index, elem) => { this.setState({ index }) }
    }
  }

  render() {
    let { sliders } = this.props
    
    return (

      <div className='home-swipe'>
        {
          sliders.length > 0 ?
            (
              <ReactSwipe className="carousel" swipeOptions={this.state.swipeOptions}>
                {
                  sliders.map((item, index) => (
                    <div key={index}>
                      <img alt='图片' src={item} />
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