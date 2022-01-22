import { useRouter } from 'next/router'

import { DefaultLayout } from "../layout";

const User = ({}) => {
  const router = useRouter()
  const { userid } = router.query 

  return (
    <>
    </>
  );
}
  
User.Layout = DefaultLayout;

export default User;  