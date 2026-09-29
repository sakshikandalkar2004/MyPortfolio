import styles from "./Certifications.module.css";
import aiCertificate from "../assets/ai-ml-workshop.jpeg";
import javaCertificate from "../assets/java-full-stack.jpeg";

function Certifications() {
  return (
    <section className={styles.certifications} id="certifications">

      <div className={styles["certification-title"]}>
        <h4>MY ACHIEVEMENTS</h4>
        <h1>Certifications</h1>
      </div>

      <div className={styles["certificates-container"]}>

        {/* AI / Machine Learning Certificate */}
        <div className={styles["certificate-card"]}>
          <img
            src={aiCertificate}
            alt="Build with AI Machine Learning Certificate"
          />

          <h2>Build with AI – Machine Learning in Practice</h2>
          <p>NXtGEN Intelligence AI Academy</p>
          <p>2 Days Workshop | 25 June 2026</p>
        </div>

        {/* Java Full Stack Certificate */}
        <div className={styles["certificate-card"]}>
          <img
            src={javaCertificate}
            alt="Java Full Stack Development Certificate"
          />

          <h2>Java Full Stack Development</h2>
          <p>LitsBros. Pvt. Ltd.</p>
          <p>Workshop | 15–23 July 2026</p>
        </div>

        {/* JobReady PDF Certificate */}
        <div className={`${styles["certificate-card"]} ${styles["pdf-card"]}`}>
          <div className={styles["pdf-icon"]}>📄</div>

          <h2>JobReady: Employability Skills</h2>
          <p>Wadhwani Foundation</p>
          <p>Basic Level | 27 December 2025</p>
          <p>79 Hours Training</p>

          <a
            href="/certificates/jobready.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles["certificate-button"]}
          >
            View Certificate
          </a>
        </div>

        {/* Participant Certificate PDF */}
        <div className={`${styles["certificate-card"]} ${styles["pdf-card"]}`}>
          <div className={styles["pdf-icon"]}>📄</div>

          <h2>Participant Certificate</h2>
          <p>Certificate of Participation</p>

          <a
            href="/certificates/participant-certificate.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles["certificate-button"]}
          >
            View Certificate
          </a>
        </div>

        {/* Third PDF Certificate */}
        <div className={`${styles["certificate-card"]} ${styles["pdf-card"]}`}>
          <div className={styles["pdf-icon"]}>📄</div>

          <h2>Certificate</h2>
          <p>Academic / Training Certificate</p>

          <a
            href="/certificates/certificate-3.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles["certificate-button"]}
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certifications;