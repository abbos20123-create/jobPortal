import Advice from "./_components/Advice";
import Footer from "./_components/Footer";
import Journey from "./_components/Journey";
import Main from "./_components/Main";
import Navbar from "./_components/Navbar";
import Opportunity from "./_components/Oppurtinity";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Advice/>
      <Opportunity/>
      <Journey/>
      <Footer/>
    </div>
  );
}
