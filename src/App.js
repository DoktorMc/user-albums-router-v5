import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";
import HomePage from "./modules/home/HomePage";
import AlbumPage from "./modules/albums/pages/albumsPage/AlbumPage";
import NotFoundPage from "./modules/about/notFound/NotFoundPage";
import Navigation from "./modules/common/commonComponents/navigation/Navigation";
import "./App.css";
import UserPage from "./modules/users/pages/userPage/UserPage";
import UserDetailsPage from "./modules/users/pages/userDetailsPage/UserDetailsPage";
import UserCRDPage from "./modules/users/pages/userCRDPage/UserCRDPage";
import AlbumDetailsPage from "./modules/albums/pages/albumDetailsPage/AlbumDetailsPage";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users/add" component={UserCRDPage} />
          <Route path="/users/:id/edit" element={UserCRDPage} />
          <Route path="/users/:id" component={UserDetailsPage} />
          <Route path="/users" component={UserPage} />

          <Route path="/albums/:id" component={AlbumDetailsPage} />
          <Route path="/albums" component={AlbumPage} />

          <Route path="/notfound" component={NotFoundPage} />
          <Route
            path="*"
            component={() => {
              history.push("/notfound");
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
