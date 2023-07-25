import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface IProps {
  header?: any;
  footer?: any;
  children: any;
}

const DefaultLayout = (props: IProps) => {
  return (
    <main>
      <Header {...(props.header || {})} />
      {props.children}
      <Footer {...(props.footer || {})} />
    </main>
  );
};

export default DefaultLayout;
