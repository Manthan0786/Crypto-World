import styles from "./styles.module.css";
import Image from "next/image";
import image1 from "../../../public/Images/7125346.jpg";

export default function Home() {
  return (
    <div className="px-20">
      <div className="mt-20 flex border-red-800 border-2 h-[60vh]">
        <div className={styles.title}>
          <h1>Welcome To World of Crypto</h1>
        </div>
        {/* <Image src={image1} alt='sdhdjf' width={300} /> */}
      </div>
    </div>
  );
}
