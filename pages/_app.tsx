import { AppProps } from "next/app";
import Container from "~/components/Container";

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
