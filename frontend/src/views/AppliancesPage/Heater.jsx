import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import formPageStyle from "assets/jss/material-kit-react/views/appliancesPage.jsx";

import image1 from "assets/img/appliances/question_images/q1_1.png";
import image2 from "assets/img/appliances/question_images/q1_2.png";
import image3 from "assets/img/appliances/question_images/q1_3.png";
import image4 from "assets/img/appliances/question_images/q1_3.png";

class AppliancesHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[this.state.cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>What kind of heater does your home have?</h4>
                </CardHeader>
                <div className={classes.horizontal}>
                    <img src={image1} alt="Furnace" />

                    <img src={image3} alt="Wall Heater" />

                    <img src={image3} alt="Wall Heater" />
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

export default withStyles(formPageStyle)(AppliancesHome);
