import MDTypography from "components/MDTypography";
// Image component
import Img from "../Img";
// images
import config1 from "../../../assets/images/docs/configurator/config_1.png";
import config2 from "../../../assets/images/docs/configurator/config_2.png";
import config3 from "../../../assets/images/docs/configurator/config_3.png";
import config4 from "../../../assets/images/docs/configurator/config_4.png";
import config5 from "../../../assets/images/docs/configurator/config_5.png";
import config6 from "../../../assets/images/docs/configurator/config_6.png";

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
      <Img alt="screenshots of configurator doc" src={config1} />
      <Img alt="screenshots of configurator doc" src={config2} />

      <MDTypography variant="body2" gutterBottom mt={3}>
        From sidenav option users can select a colour and change the theme colour into it.
      </MDTypography>
      <Img alt="screenshots of configurator doc" src={config3} />
      <MDTypography variant="body2" gutterBottom mt={3}>
        From the Sidenav Type option users can change side Navigation bar type into dark, white or
        transparent. It was set to dark as default.
      </MDTypography>
      <Img alt="screenshots of configurator doc" src={config4} />
      <MDTypography variant="body2" gutterBottom mt={3}>
        From enabling the Navbar Fixed option users can make the top Navigation Bar fixed to top
        when scrolling. It will come enabled by default.
      </MDTypography>
      <Img alt="screenshots of configurator doc" src={config5} />
      <MDTypography variant="body2" gutterBottom mt={3}>
        From the Light / Dark option users can enable the dark mode
      </MDTypography>
      <Img alt="screenshots of configurator doc" src={config6} />
    </>
  );
}

export default Configurator;
