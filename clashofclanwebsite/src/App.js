import React, { Component } from 'react';
import { Route, Link,Switch,  Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

import MainPage from './App/Pages/MainPage.js';
//Principal Pages
import CalculatorPage from './App/Pages/CalculatorPage.js';
import StrategyEditorPage from './App/Pages/StrategyEditorPage.js';
import MyVillagePage from './App/Pages/MyVillagePage.js';
import SignUpPage from './App/Pages/SignUpPage.js';
import LoginPage from './App/Pages/LoginPage.js';
import ClanToolsPage from './App/Pages/ClanToolsPage.js';
import Error404Page from './App/Pages/Error404Page.js'
//Sub Pages
import ClaimMyClanSubPage from './App/Pages/Sub/ClaimMyClanSubPage.js'
import NewClanWarSubPage from './App/Pages/Sub/NewClanWarSubPage.js'
import ClanWarSubPage from './App/Pages/Sub/ClanWarSubPage.js'
import MyClanSubPage from './App/Pages/Sub/MyClanSubPage.js'

//Template
import Footer from './App/Pages/Templates/Footer.js';
import NavBar from './App/Pages/Templates/NavBar.js';

const history = createBrowserHistory();

class App extends Component {
constructor (props) {

    super(props);
    this.state = {refresh:false};
  this.refresh=this.refresh.bind(this)
}
refresh(){
  
this.setState({refresh:true})
}

/*shouldComponentUpdate(nextState,nextprops){
if (this.state.refresh===true)
  {console.log('shouldComponentUpdate')
    return true}
return true
}*/

  render() {
    return (

    
<div className="App vw-95">

<Router history={history}>
<NavBar history={history} refresh={this.state.refresh}/> 
<Switch>

      <Route exact path="/" render={(props) => <MainPage history={history} />}/>
      
      <Route exact path="/lootcalculator" history={history} component={CalculatorPage} />
      
      <Route exact path="/strategyeditor" history={history} component={StrategyEditorPage} />
      
      <Route exact path="/myvillage"  history={history} render={(props) =>
      <MyVillagePage {...props} refresh={this.refresh} history={history} />}/>
      
      <Route exact path="/signup" history={history} component={SignUpPage} />
      
      <Route exact path='/login' history={history} render={(props) =>
      <LoginPage {...props} refresh={this.refresh} />}/>

      <Route exact path='/clantools' history={history} component={ClanToolsPage}/>
      <Route exact path='/claimmyclan' history={history} component={ClaimMyClanSubPage}/>
      <Route exact path='/newclanwar' history={history} component={NewClanWarSubPage}/>

      <Route exact path='/clanwar' history={history} component={ClanWarSubPage}/>
      <Route exact path='/myclan' history={history} component={MyClanSubPage}/>

      <Route history={history} component={Error404Page}/>
</Switch>
<Footer/>
</Router>

</div>)
  
}
}
export default App;
