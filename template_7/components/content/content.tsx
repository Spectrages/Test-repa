import styles from "./content.module.scss";
import { Description } from "@/components/description";
import { Questions } from "@/components/questions";
import { Reviews } from "@/components/reviews";
import { Filter } from "@/components/filter";
import { Schedule } from "@/components/shedule";
import { Cleaning } from "@/components/cleaning";

const Content = () => {
  return (
    <div className={styles.container}>
      <Description />
      <Cleaning />
      <Filter />
      <Schedule />
      <Reviews />
      <Questions />
    </div>
  );
};

export default Content;
