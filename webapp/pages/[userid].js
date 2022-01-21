
import { useRouter } from 'next/router'
import { UserContent } from '../components/UserContent';
import { UserHeader } from '../components/UserHeader';
import { DefaultLayout } from "../layout";

export const items =  
    [
      {
        id: 'anitium',
        name: 'Anitium',
        profileImage: '/assets/img/users/anitium/profile.jpg',
        headerImage: '/assets/img/users/anitium/header.jpg',
        aboutText: 'Hello Friends 💛  Thanks to you I can focus 100% on my work as an artist and a streamer. Thank you for giving me the opportunity to keep sharing my passions with you!',
        webpage: 'https://anitium.com',
        count: 493,
      },
      {
        id: 'karelbecerra',
        name: 'KarelBecerra',
        profileImage: '/assets/img/users/karelbecerra/profile.jpg',
        headerImage: '/assets/img/users/karelbecerra/header.jpg',
        aboutText: 'If you\'ve enjoyed my games and would like to support me as I craft future gaming content, please consider donating! Either way, thank you so much for your time and stay whimsical!',
        webpage: 'https://twitter.com/karelbecerra',
        count: 8755,
      },
      {
        id: 'juancolamendy',
        name: 'JuanCOlamendy',
        profileImage: '/assets/img/users/juancolamendy/profile.jpg',
        headerImage: '/assets/img/users/juancolamendy/header.jpg',
        aboutText: 'Hey!   If you enjoy my videos and want to buy me a cup of coffee (or a few) as a show of appreciation, this is the place to do it!   Watch the video below for a quick intro!  Thanks in advance, and stay cool and attractive.  -FJ',
        webpage: 'https://twitter.com/juancolamendy',
        count: 6223,
      },
    ]
  ;


const User = ({}) => {
  const router = useRouter()
  const { userid } = router.query 

  function findUserById(id) {
    //return items.find((element) => {
    //  return element.id === id;
    //})
    return {
      id: 'karelbecerra',
      name: 'Karel Becerra',
      address: '0xdbF335F4AaF2E04439975C7b7F3bF32343A5d5fe',
      profileImage: '/assets/img/users/karelbecerra/profile.jpg',
      headerImage: '/assets/img/users/karelbecerra/header.jpg',
      aboutText: 'If you\'ve enjoyed my games and would like to support me as I craft future gaming content, please consider donating! Either way, thank you so much for your time and stay whimsical!',
      webpage: 'https://twitter.com/karelbecerra',
      count: 8755,
    }
  }

  return (
    <>
      <div className='bg-gray-50'>
        <div className='flex justify-center'>
          <div className='max-w-7xl'>
            <UserHeader user={findUserById(userid)}/>
            <UserContent user={findUserById(userid)}/>
          </div>
        </div>
      </div>
    </>
  );
}
  
User.Layout = DefaultLayout;

export default User;  