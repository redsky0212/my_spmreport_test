import React from 'react';
import {Switch, Route} from 'react-router-dom';

// 화면 layout 컨테이너 컴포넌트 불러오기
import { TopContainer, SearchContainer, FooterContainer } from '../containers/layout';
// router에 의해서 불러온 화면 Page 컴포넌트 불러오기.
import SalesPage from 'pages/SalesPage';
// Layout 컴포넌트 불러오기.
import {LayoutWrapper, Navi} from './layout';  


const App = () => {
  return (
    <LayoutWrapper>
        <TopContainer />
        <SearchContainer />
        <Navi />
        <Switch>
            <Route exact path="/" component={SalesPage} />
            {/* <Route exact path="/market" component={MarketContainer} /> */}
        </Switch>
        <FooterContainer />
    </LayoutWrapper>
  );
};

export default App;