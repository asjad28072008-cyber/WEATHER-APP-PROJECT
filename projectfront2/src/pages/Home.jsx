import Appshell from "./Appshell";
import Homecarousel from "./components/Homecarousel";

export default function Home() {
  return (
    <Appshell>
      <section>
    <div className='home-page' >
      <h2>Welcome To WeatherApp</h2>
      <Link to="/search">
      <button>Search Weather</button>
      </Link>
    </div>
    </section>
    </Appshell>
  );
}

