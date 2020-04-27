import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Search from "./components/Search/Search";
import LoginPage from "./components/Login/Login";
import {Route} from "react-router-dom";
import Flats from "./components/Flats/Flats";

const App = (props) => {
  return (
          <div className='app-wrapper'>
              <Header />

              
              <div className='app-wrapper-content'>
                  {/* <Route path='/dialogs'
                         render={ () => <DialogsContainer /> }/>

                  <Route path='/profile'
                         render={ () => <Profile /> }/>

                  <Route path='/users'
                         render={ () => <UsersContainer /> }/> */}
                  <Route exact path='/'
                         render={() => <Search/>}/>
                  <Route path='/login'
                         render={() => <LoginPage/>}/>

              </div>
              <Flats state={props.state.profilePage} />
          </div>
      )
}

export default App;