import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { styled } from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // Mentre carica, mostrare lo spinner

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // In mancanza di user autenticato redirect

  //Se c'è l'user render l'app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
