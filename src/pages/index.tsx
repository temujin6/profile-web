import Section1 from "@/components/Index/Section1";
import DefaultLayout from "@/components/Layout";
import * as React from "react";

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout header={{ isIndex: true }}>
      <Section1 />
    </DefaultLayout>
  );
};

export default IndexPage;
