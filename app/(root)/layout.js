import { Providers } from "../providers";
import { Header } from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
