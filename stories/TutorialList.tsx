import styles from "./TutorialList.module.css";

interface Type {}

export const TutorialList: React.FC<Type> = () => {
  return (
    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          東西南北の知り方 <span>▼</span>
        </h2>
        <p>Find in-depth information about Next.js features and&nbsp;API.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          目印の見つけ方 <span>▼</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          方向音痴あるある <span>-&gt;</span>
        </h2>
        <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          文献 <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
      </a>
    </div>
  );
};
