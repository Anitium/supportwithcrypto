
import { DefaultLayout } from '../layout';
import { HomeIntro } from '../components/HomeIntro';
import { SupportBy } from '../components/SupportBy';
import { ClaimSection } from '../components/ClaimSection';

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
      <SupportBy />
    </>
  )
}

Home.Layout = DefaultLayout;

export default Home;