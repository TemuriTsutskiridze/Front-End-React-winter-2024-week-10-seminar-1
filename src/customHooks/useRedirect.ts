import { useNavigate } from "react-router-dom";

export const useRedirect = (route: string) => {
  const navigate = useNavigate();
  navigate(route);
};
