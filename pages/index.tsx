import { css } from "@emotion/react";
import Head from "next/head";
import Button from "~/components/Button";
import StyledButton from "~/components/StyledButton";

export default function Home() {
  const titleStyle = css({
    color: "gray",
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 css={titleStyle}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Button css={{ fontSize: "2rem" }} onClick={() => alert("Hello")}>
          Hello
        </Button>
        <StyledButton primary css={{ fontSize: "2rem" }} onClick={() => alert("World")}>
          World
        </StyledButton>
      </main>
    </div>
  );
}
