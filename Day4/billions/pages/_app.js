import "../styles.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="container">
      <Component {...pageProps} />
    </main>
  );
}
