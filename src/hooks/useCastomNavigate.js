import { useHistory } from "react-router-dom";
import {} from "react-router-dom";

const useCustomNavigate = (navigateTo = "/") => {
  const history = useHistory();
  const goBack = () => history.goBack();
  const moveForward = () => history.goForward();
  const navigateToPage = () => history.push(navigateTo);

  return { goBack, moveForward, navigateToPage };
};

export default useCustomNavigate;
