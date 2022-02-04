import HomeIntro from '../components/home/HomeIntro';
import HomeTeam from '../components/home/HomeTeam';
import { DefaultLayout } from '../layout';

const Index = () => {
  return (
    <>
    <content className="container mx-auto flex flex-col my-24 max-w-6xl">
      <section className='flex flex-row w-full justify-center space-x-10'>
        <HomeIntro />
      </section>
    </content>
    <content className="flex items-center justify-center py-20 bg-white">
      <div className='flex max-w-6xl'>
        <section className='flex flex-row w-full justify-center items-center'>
          <HomeTeam />
        </section>
      </div>
    </content>
    </>
  )
}

Index.Layout = DefaultLayout;

export default Index;