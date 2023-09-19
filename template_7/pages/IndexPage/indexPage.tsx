import { FC } from "react";
import styles from "./indexPage.module.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Content } from "@/components/content";

const IndexPage: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default IndexPage;
