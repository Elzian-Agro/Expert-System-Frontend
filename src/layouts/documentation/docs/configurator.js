import MDTypography from "components/MDTypography";

function Configurator() {
  return (
    <>
      <MDTypography variant="h2" gutterBottom>
        Configurator
      </MDTypography>
      <MDTypography variant="body2" gutterBottom>
        On the top right corner there is a Configurator icon, by clicking it user can see the
        configurator
      </MDTypography>
      {/* image */}
      <MDTypography variant="body2" gutterBottom>
        From sidenav option users can select a colour and change the theme colour into it.
      </MDTypography>
      {/* image */}
      <MDTypography variant="body2" gutterBottom>
        From the Sidenav Type option users can change side Navigation bar type into dark, white or
        transparent. It was set to dark as default.
      </MDTypography>
      {/* image */}
      <MDTypography variant="body2" gutterBottom>
        From enabling the Navbar Fixed option users can make the top Navigation Bar fixed to top
        when scrolling. It will come enabled by default.
      </MDTypography>
      {/* image */}
      <MDTypography variant="body2" gutterBottom>
        From the Light / Dark option users can enable the dark mode
      </MDTypography>
    </>
  );
}

export default Configurator;
