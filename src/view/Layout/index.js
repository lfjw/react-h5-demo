import React, { Component, Fragment } from 'react';
import Tab from '../../components/Tab'
import '../../common/global.less';
import { connect } from 'react-redux';

class Layout extends Component {
    render() {
        return <Fragment>
            {/* 相当于 */}
            {/* <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/mine' component={Mine}></Route>
                    <Route path='/profile' component={Profile}></Route>
                </Switch> */}
            {this.props.children}
            <Tab></Tab>
        </Fragment>
    }
}

export default connect()(Layout)

