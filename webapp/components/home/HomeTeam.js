import React from 'react';

const HomeTeam = () => {
  return (
    <>
      <div className='flex flex-row w-full items-center justify-between space-x-10 space-y-10'>
        <div className='flex flex-col items-top justify-start align-top w-1/3'>
          <h1 className='flex'>Our Team</h1>
          <p className='flex'>Meet our team of digital warriors, ready to harness the Force for good.</p>
        </div>
        <div className='flex w-2/3 space-x-10'>
          <div className='flex flex-col w-1/2'>
            <img className="w-full rounded-xl  object-left-top overflow-hidden object-cover" src='/assets/img/team/karel.jpg'></img>
            <h1 className='text-2xl text-gray-600 font-bold'>Karel Becerra</h1>
            <h1 className='text-2xl text-swc-right font-bold'>Entrepeneur</h1>
            <p>Fast learner, hard worker and team player with strong critical thinking, problem solving and time management skills.</p>
            <div className="flex flex-row">
              <a><div className="rounded-full h-8 w-8 bg-blue-300">T</div></a>
              <a><div className="rounded-full h-8 w-8 bg-blue-300">L</div></a>
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <img className="w-full rounded-xl  object-left-top overflow-hidden object-cover" src='/assets/img/team/juanc.jpg'></img>
            <h1 className='text-2xl text-gray-700 font-bold'>Juan C Olamendy</h1>
            <h1 className='text-2xl text-gray-700 font-bold'>Entrepeneur</h1>
            <p>Fast learner, hard worker and team player with strong critical thinking, problem solving and time management skills.</p>
            <div className="flex flex-row">
              <a><div className="rounded-full h-8 w-8 bg-blue-300">T</div></a>
              <a><div className="rounded-full h-8 w-8 bg-blue-300">L</div></a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomeTeam;
