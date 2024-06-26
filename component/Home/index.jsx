/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import TweenOne from 'rc-tween-one';
import Nav3 from './Nav3';
import Banner5 from './Banner5';
import Feature6 from './Feature6';
import Feature7 from './Feature7';
import Feature0 from './Feature0';
import Feature8 from './Feature8';
import Footer1 from './Footer1';
// import 'antd/dist/antd.css';

import {
  Nav30DataSource,
  Banner50DataSource,
  Feature60DataSource,
  Feature70DataSource,
  Feature00DataSource,
  Feature80DataSource,
  Footer10DataSource,
} from './data.source';

import styles from './less/antMotionStyle.less';

import { Button } from 'antd';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const items = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature7
        id="Feature7_0"
        key="Feature7_0"
        dataSource={Feature70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className={styles['templates-wrapper']}
      >
        {/* 如果不是 dva 2.0 替换成 {items} start */}
        {this.state.show && items}
        {/* 如果不是 dva 2.0 替换成 {items} end */}
        {/* <div>
          <TweenOne animation={{ x: 50, y: 50, opacity: 1 }}>
            <div>Animating element</div>
          </TweenOne>
        </div> */}
        
      </div>
    );
  }
}
