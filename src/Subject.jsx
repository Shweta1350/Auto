import React from "react";
import "./index.css";
import {Switch, Route, Redirect} from "react-router-dom";
import {NavLink} from "react-router-dom";


export default class Subject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container">
         
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-7 col-sm-7">
                    <div className="form-group">
                      
                    </div>
                  </div>

                </div>
              </div>
        
          </div>
          <div className="outer">

          <div className="friend-list">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/6495ED" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                     
                      <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        Descriptive Analytics
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/008B8B" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                    
                      <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        Computer Networks
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/9932CC" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                      
                      <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        Compiler Design 
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/228B22" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                    
                     <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        DBMS
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/20B2AA" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                      
                      <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        Predictive  Analytics
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="friend-card">
                  <img src="https://via.placeholder.com/800x100/FF4500" alt="profile-cover" className="img-responsive cover" />
                  <div className="card-info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="user" className="profile-photo-lg" />
                    <div className="friend-info">
                    
                      <h5><NavLink activeClassName='menu_active' className="nav-link" to="/Classroom">
        Professional Skills 
        </NavLink>
        </h5>
                      <p>Prof. XYZ</p>
                    </div>
                  </div>
                </div>
              </div>
</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}




