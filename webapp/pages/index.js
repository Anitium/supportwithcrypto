
import { DefaultLayout } from '../layout';
import { HomeIntro } from '../components/HomeIntro';
import { Guides } from '../components/Guides';
import { SupportBy } from '../components/SupportBy';

const Home = () => {
  // functions
  const handleFetchPost = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log('data:', data);
  };

  // render out
  return (
    <>
      <HomeIntro />
      <Guides />
      <SupportBy />
    </>
  )
}

Home.Layout = DefaultLayout;

export default Home;