import TermsConditions from '../components/terms-conditions/TermsConditions';
import { DefaultLayout } from '../layout';

const Index = () => {
  return (
    <>
    <content className="container mx-auto flex justify-center my-10">
      <section className='flex flex-row w-full justify-center space-x-10 max-w-6xl'>
        <TermsConditions />
      </section>
    </content>
    </>
  )
}

Index.Layout = DefaultLayout;

export default Index;