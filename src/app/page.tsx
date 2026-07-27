import Image from "next/image";
import styles from "@/styles/home.module.scss";
import AppCard from "@/components/AppCard";

const apps = [
  {
    title: "Todo App",
    description: "タスクの追加・完了・削除を管理するアプリ",
    href: "/todo",
  },
  {
    title: "Memo App",
    description: "簡単なメモを保存・管理するアプリ",
    href: "/memo",
  },
];

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <p className={styles.label}>Next.js practice</p>
        <h1 className={styles.title}>Mini App Collection</h1>

        <p className={styles.description}>
          Next.js、Reactを使用した、様々なミニアプリ集。練習用。
        </p>
      </div>

      <div className={styles.grid}>
        {apps.map((app) => (
          <AppCard
            key={app.href}
            title={app.title}
            description={app.description}
            href={app.href}
          />
        ))}
      </div>
    </section>
  );
}
