import { DefaultLayout } from '../layout';
import { HomeIntro } from '../components/HomeIntro';
import { SupportBy } from '../components/SupportBy';
import { ClaimSection } from '../components/ClaimSection';

const Index = () => {
  // functions

  // render out
  return (
    <>
      <HomeIntro />
      <ClaimSection />
      <SupportBy />
    </>
  )
}

Index.Layout = DefaultLayout;

export default Index;