import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./NavBar.css";

interface LinkTabProps extends RouteComponentProps {
  label?: string;
  href: string;
  value: string;
}

export const NavBar: React.FC = () => {
  const [value, setValue] = React.useState();

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
    return event;
  }
  function links(props: LinkTabProps) {
    const currentValue = props.location.pathname;
    setValue(currentValue);
    return (
      <Tab
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          props.history.push(props.href);
          return event;
        }}
        {...props}
      />
    );
  }
  const LinkTab = withRouter(links);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <Tabs variant="standard" value={value} onChange={handleChange}>
        <LinkTab label="Home" href="/home" value="/home" />
        <LinkTab label="About Me" href="/about" value="/about" />
        <LinkTab label="Projects" href="/projects" value="/projects" />
      </Tabs>
    </AppBar>
  );
};
