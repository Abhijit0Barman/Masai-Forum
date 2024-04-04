import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";
// import { RootState } from "../store/rootReducer"; // Assuming RootState is the type of your Redux store's root state

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);
  const location = useLocation();

  return !isAuth ? (
    <Navigate to={"/login"} state={{ from: location.pathname }} replace />
  ) : (
    <>{children}</>
  );
};

//'''''''''''''''''''''''''''''''''''''''''''''''''

// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// export const PrivateRoute = ({ children }) => {
//   const isAuth = useSelector((s) => s.authReducer.isAuth);
//   const location = useLocation();

//   return !isAuth ? (
//     <Navigate to={"/login"} state={location.pathname} replace />
//   ) : (
//     children
//   );
// };
