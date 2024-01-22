import CarouselComponent from "../components/Carousel";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <CarouselComponent />
    </div>
  );
};

export default Home;
