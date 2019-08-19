import React from "react";
import {
  Tabs,
  Tab,
  AppBar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./NavBar.css";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      fontFamily: "Anton",
      textDecoration: "none",
      fontSize: "50px"
    }
  })
);
interface LinkTabProps extends RouteComponentProps {
  label?: string;
  href: string;
  value: string;
}

export const NavBar: React.FC = () => {
  const [value, setValue] = React.useState();
  const classes = styles();

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
    return event;
  }
  function links(props: LinkTabProps) {
    const currentValue = props.location.pathname;
    setValue(currentValue);
    return (
      <div className="tab">
        <Tab
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            props.history.push(props.href);
            return event;
          }}
          {...props}
          className={classes.tab}
          style={{ textDecorationLine: "none" }}
        />
      </div>
    );
  }
  const LinkTab = withRouter(links);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      style={{
        backgroundColor: "transparent",
        top: "auto",
        bottom: 0
      }}
    >
      <div className="tabbar">
        <Tabs variant="standard" value={value} onChange={handleChange}>
          <LinkTab label="Home" href="/home" value="/home" />
          <LinkTab label="About Me" href="/about" value="/about" />
          <LinkTab label="Projects" href="/projects" value="/projects" />
          <LinkTab label="Contact" href="/contact" value="/contact" />
        </Tabs>
      </div>
    </AppBar>
  );
};
