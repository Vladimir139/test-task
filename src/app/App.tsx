import { useRouter } from "next/router";
import { FC } from "react";

import { Container } from "@/shared/ui/atoms";
import { HorizontalFilters } from "@/shared/ui/templates";
import { Footer, Header } from "@/widgets";

import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  const router = useRouter();

  const isShowFilters =
    router.pathname === "/vacancy" ||
    router.pathname === "/professions" ||
    router.pathname === "/enterprises" ||
    router.pathname === "/educational-establishments" ||
    router.pathname === "/internships-and-practices";

  return (
    <>
      <Header />
      {isShowFilters && <HorizontalFilters />}
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
