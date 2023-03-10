import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import {
  BrowserRouter as Router,
  useLocation,
  Link,
  useHistory,
  Route,
  Switch,
} from "react-router-dom";
import { getAlbumsByid } from "../../../../store/actions/albumActions";
import FolderIcon from "@mui/icons-material/Folder";
import {
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import UserCRDPage from "../../pages/userCRDPage/UserCRDPage";

const UserDetails = ({ userDetail, userAlbums, getUserAlbums }) => {
  const { pathname } = useLocation();
  console.log("USER Detail", userDetail);
  useEffect(() => {
    getUserAlbums(userDetail.id);
  }, [userDetail.id]);

  const history = useHistory();
  console.log("PATH", pathname);

  const onEditForm = () => {
    history.push(`${pathname}/edit`);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box component="div">
        <h3>USER DETAIL</h3>
        <Box
          component="div"
          sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
        >
          <Typography sx={{ mb: 2, fontSize: 25 }}>
            {userDetail.name}
          </Typography>
          <Typography sx={{ display: "flex", flexDirection: "column" }}>
            <span>
              User name - <span>{userDetail.username}</span>
            </span>
            <span>
              Phone - <span>{userDetail.phone}</span>
            </span>
            <span>
              E-mail - <span> {userDetail.email}</span>
            </span>
            <span>
              Website - <span> {userDetail.website}</span>
            </span>
          </Typography>
        </Box>{" "}
        <Box
          component="div"
          sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
        >
          <Typography sx={{ mb: 2, fontSize: 25 }}>Address</Typography>
          <Typography sx={{ display: "flex", flexDirection: "column" }}>
            <span>
              City - <span> {userDetail.address?.city}</span>
            </span>
            <span>
              Street - <span> {userDetail.address?.street}</span>
            </span>
            <span>
              Suite - <span> {userDetail.address?.suite}</span>
            </span>
            <span>
              Zip-code - <span> {userDetail.address?.zipcode}</span>
            </span>
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ mb: 2, p: 2, border: "1px dashed grey", maxWidth: 500 }}
        >
          <Typography sx={{ mb: 2, fontSize: 25 }}>Company</Typography>
          <Typography sx={{ display: "flex", flexDirection: "column" }}>
            <span>
              Company name - <span> {userDetail.company?.name}</span>
            </span>
            <span>
              BS - <span> {userDetail.company?.bs}</span>
            </span>
            <span>
              Catch phrase - <span> {userDetail.company?.catchPhrase}</span>
            </span>
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={onEditForm}
          sx={{ width: "10ch", fontSize: 13, fontWeight: "bold" }}
          color="secondary"
        >
          Edit
        </Button>
      </Box>

      <Box component="div" sx={{ maxWidth: 500 }}>
        <Grid item xs={"auto"} md={6}>
          <Typography sx={{ mt: 3, mb: 2 }} variant="h5" component="div">
            User photo album
          </Typography>
          {userAlbums.map((item) => (
            <List item={item} key={item.id}>
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <Link to={`/albums/${item.id}`}>
                  <ListItemText primary={`${item.title}`} />
                </Link>
              </ListItem>
            </List>
          ))}
        </Grid>
        {/* </Box> */}
      </Box>
     
    </Box>
  );
};

const mapStateToProps = ({ users, albums }) => {
  const item = users.userDetail;
  const albumsItem = albums.userAlbums;
  return {
    userDetail: item,
    userAlbums: albumsItem,
  };
};

const mapDispatchToProps = {
  getUserAlbums: getAlbumsByid,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
