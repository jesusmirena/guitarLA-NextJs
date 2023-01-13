import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";

import styles from "./about-us.module.css";

const AboutUs = () => {
  return (
    <Layout title="About us" description="About us, GuitarLA, music store">
      <main>
        <h2 className="heading">About us</h2>
        <div className={styles.content}>
          <Image
            alt="About us image"
            src="/img/aboutUs.jpg"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eum
              nesciunt quis reprehenderit nihil quibusdam alias, sapiente
              aliquid non ad eligendi minima laborum quod perspiciatis odio illo
              dignissimos? Repellendus, quibusdam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eum
              nesciunt quis reprehenderit nihil quibusdam alias, sapiente
              aliquid non ad eligendi minima laborum quod perspiciatis odio illo
              dignissimos? Repellendus, quibusdam!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
