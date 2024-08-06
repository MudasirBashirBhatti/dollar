'use client'
import { Finlandica } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Providers } from "./Redux/Provider";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import Cart from "./Components/Cart/Cart";
import { usePathname } from "next/navigation";
import AdminHeader from "./Components/AdminHeader/AdminHeader";
import { userData } from "./utilities/userData";
import SellerHeader from "./Components/SellerHeader/SellerHeader";

const finlandica = Finlandica({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const renderHeader = () => {
    const data = userData()
    const pathname = usePathname()
    if (typeof window !== 'undefined') {
      if (pathname.includes('/admin')) {
        return <AdminHeader />
      } else if (data.userRole == 'seller' || pathname.includes('/sell') || pathname.includes('/seller') || pathname.includes('/updateprompt')) {
        return <SellerHeader />
      } else {
        if (data.userRole == 'admin') {
          return <AdminHeader />
        } else {
          return <Header />
        }
      }
    }

    return <Header />

  }
  return (
    <html lang="en">
      <Providers>
        <body className={finlandica.className} style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'space-between', overflowX: 'hidden' }}>

          {/* condition header rendering */}
          {renderHeader()}
          <MobileNavbar />
          <Cart />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
