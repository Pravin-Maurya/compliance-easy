import GoogleButton from "react-google-button";

const GoogleLogin = () => {
  const environment = {
    baseUrl: "https://sub4.macstak.in",
  };

  const handleGoogle = () => {
    window.open(`${environment.baseUrl}/auth/google`, "_self");
  };

  return <GoogleButton onClick={handleGoogle} />;
};
export default GoogleLogin;
