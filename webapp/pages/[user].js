
import { useRouter } from 'next/router'
import { UserContent } from '../components/UserContent';
import { UserHeader } from '../components/UserHeader';
import { DefaultLayout } from "../layout";


const User = ({}) => {
  const router = useRouter()
  const { user } = router.query 

  return (
    <>
      <UserHeader user={user}/>
      <UserContent user={user}/>
    </>
  );
}
  
User.Layout = DefaultLayout;

export default User;