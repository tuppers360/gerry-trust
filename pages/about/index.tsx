import Layout from '../../components/layout';
import styles from './about.module.scss';
import { SocialIcon } from '../../components/socialicon/socialIcon';
import Header from '../../components/header/index';

export default function About() {
  return (
    <Layout title="About | Gerry Richardson Trust">
      <main>
        <Header title="About Us" heading="Learn about why we do this" />
        <div className={styles.content_section}>
          <div className={styles.container}>
            <p>
              On the 23rd August 1971 Superintendent Gerald Richardson was shot
              dead while attempting to arrest robbers involved in a raid on a
              Blackpool jewellers shop. Gerry was posthumously awarded the
              George Cross.
            </p>
            <p>
              At the time Gerry was a highly regarded member of the Blackpool
              North Rotary Club and much thought was given by his fellow members
              to ways in which his memory could be honoured and perpetuated.
            </p>
            <p>
              Gerry had a passion for youth work and shortly before his death he
              had been a prime mover in raising a considerable sum of money to
              acquire Snows Heights in the Lake District for use as a centre for
              young people of Blackpool and the Fylde.
            </p>
            <p>
              Gerry’s Rotarian colleagues decided to set up a trust in 1974 to
              expand the work which Gerry had been so dedicated. In over 40
              years of existence through hard work by the Club, generous gifts
              and shrewd investment the Trust has become a major youth charity.
            </p>
            <p>
              The Trust has generated sufficient sums to pursue its objectives
              and since it was set up, nearly 19000 young people – many of them
              with special needs – have been helped to pursue interests and
              activities, both of physical and cultural character which they
              have found fulfilling and life and career enhancing.
            </p>
            <p>
              In the process of support these young people the Trust has handed
              out grants totalling nearly £350,000.
            </p>
            <p>
              His legacy continues today through the enthusiasm of the existing
              and past Trustees.
            </p>
            <p>
              One of the highlights of the year is the Annual Special Needs
              Music Festival for pupils of the six Special School in Blackpool,
              Wyre ad Fylde Boroughs. The concerts are both inspirational and
              humbling and the performers are very talented young children. We
              would like to thank the Harrison Family of Ribby Hall Village,
              Wrea Green for the splendid facilities provided.
            </p>
            <div className={styles.trustee_container}>
              <h1>Meet the Trustees</h1>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/lee_wilson.jpg" alt="Lee Wilson" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="https://twitter.com/Leew1341S"
                    brand="twitter"
                  />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Lee Wilson
                    <br />
                    <span>Chair</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/chris_hardy.jpg" alt="Chris Hardy" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="https://twitter.com/CI3951Hardy"
                    brand="twitter"
                  />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Chris Hardy
                    <br />
                    <span>Trustee / Compere</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img
                    src="/images/claire_goss.jpg"
                    alt="Claire van Deurs Goss"
                  />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="https://twitter.com/claralou3819"
                    brand="twitter"
                  />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Claire van Deurs Goss
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img
                    src="/images/david_williamson.jpg"
                    alt="David Williamson"
                  />
                </div>
                <div className={styles.details}>
                  <h2>
                    David Williamson
                    <br />
                    <span>Treasurer / Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/sample4.jpg" alt="Gareth Tupman" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="www.twitter.com/tuppers360"
                    brand="twitter"
                  />
                  <SocialIcon url="www.instagram.com/" brand="instagram" />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Gareth Tupman
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/sample2.jpg" alt="Susannah Clarke" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon url="www.twitter.com/" brand="twitter" />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Susannah Clarke
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/sample6.jpg" alt="Jacqueline Longdon" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="www.teitter.com/tuppers360"
                    brand="twitter"
                  />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Jacqueline Longdon Bem
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/sample7.jpg" alt="Sarah Longden" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon
                    url="www.teitter.com/tuppers360"
                    brand="twitter"
                  />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Sarah Longden
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img
                    src="/images/chris_pickard.jpg"
                    alt="Christine Pickard"
                  />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon url="www.facebook.com" brand="facebook" />
                  <SocialIcon url="www.twitter.com/" brand="twitter" />
                  <SocialIcon url="www.instagram.com" brand="instagram" />
                </ul>
                <div className={styles.details}>
                  <h2>
                    Christine Pickard
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.imgBx}>
                  <img src="/images/john_pickard.jpg" alt="John Pickard" />
                </div>
                <ul className={styles.social_icon}>
                  <SocialIcon url="www.facebook.com" brand="facebook" />
                  <SocialIcon url="www.twitter.com/" brand="twitter" />
                  <SocialIcon url="www.instagram.com" brand="instagram" />
                </ul>
                <div className={styles.details}>
                  <h2>
                    John Pickard
                    <br />
                    <span>Trustee</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
