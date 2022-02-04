import HomeIntro from '../components/home/HomeIntro';
import HomeTeam from '../components/home/HomeTeam';
import { DefaultLayout } from '../layout';

const Index = () => {
  return (
    <>
    <content className="container mx-auto flex flex-col my-10 max-w-6xl">
      <section className='flex flex-row w-full justify-center space-x-10'>
        <HomeIntro />
      </section>
      <section className='flex flex-row w-full justify-center items-center'>
        <HomeTeam />
      </section>
    </content>
    </>
  )
}

Index.Layout = DefaultLayout;

export default Index;