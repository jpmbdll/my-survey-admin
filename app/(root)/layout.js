import { Providers } from "../providers";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}
