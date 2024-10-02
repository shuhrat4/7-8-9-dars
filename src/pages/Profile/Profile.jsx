import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Arrow, Location, Ball, LinkIcon } from '../../assets/images/Icons'
import Bgphoto from '../../assets/images/bg-photo.png'

function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('token'))
  const [profileImg, serProfileImg] = useState('https://picsum.photos/800/800')
  const [profileActive, setProfileActive] = useState("Tweets")
  const [isUpdateModal, setIsUpdataModal] = useState(false)

  return (
    <div className='border-r-[2px] border-slate-300 h-[100vh] overflow-y-auto'>
      <div className='py-[20px] border-b-[2px] pl-[31px] border-slate-300 flex items-center space-x-10'>
        <button onClick={() => navigate(-1)}>
          <Arrow />
        </button>
        <div className=' flex flex-col'>
          <strong className='font-bold text-[20px]'>{user.login}</strong>
          <span className='text-[16px] opacity-60 mt-[2px]'>1,070 Tweets</span>
        </div>
      </div>
      <img className='h-[280pxa]' src={Bgphoto} alt="" width={'100%'} />
      <div className='flex items-end -mt-[75px] justify-between px-[25px]'>
        <img className='w-[150px] h-[150px] rounded-full ' src={profileImg} alt="" width={100} height={100} />
        <button onClick={() => setIsUpdataModal(true)} className='font-bold text-[18px] py-[10px] border-[1px] border-slate-400 rounded-[50px] w-[120px]'>Edit profile</button>
      </div>
      <div className='p-[25px]'>
        <strong className='text-[24px]'>{user.login}</strong>
        <p className='text-[14px] opacity-60'>@bobur_mavlonov</p>
        <p className='mt-[15px] text-[18px] '>UX&UI designer at <span className='text-blue-500 '> @abutechuz</span></p>
      </div>
      <ul className='px-[25px] mb-[15px] flex items-center space-x-[29px]'>
        <li className='flex items-center space-x-[5px]'>
          <Location />
          <span className='text-[18px] opacity-60'>Mashag’daman</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <LinkIcon />
          <span className='text-[18px] text-blue-500 opacity-60'>t.me/boburjon_mavlonov</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <Ball/>
          <span className='text-[18px] opacity-60'>Born November 24, 2000</span>
        </li>
       
      </ul>
      <ul className='px-[25px] mb-[40px] flex items-center space-x-[29px]'>
        <li className='flex items-center space-x-[5px]'>
       <strong className='text-[18px]'>67</strong>
          <span className='text-[18px] opacity-60'>Following</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <strong  className='text-[18px]'>47</strong>
          <span className='text-[18px] opacity-60'>Following</span>
        </li>
      </ul>
      <div className='flex items-center justify-between px-[25px] border-b-[2px] border-slate-300'>
          <Link onClick={(e) => profileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == 'Tweets' ? 'before:left-0':''} `} to={'Tweets'}>Tweets</Link>
          <Link onClick={(e) => profileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == 'Tweets & replies' ? 'before:left-0':''} `} to={'Tweets & replies'}>Tweets & replies</Link>
          <Link onClick={(e) => profileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == 'Media' ? 'before:left-0':''} `} to={'Media'}>Media</Link>
          <Link onClick={(e) => profileActive(e.target.textContent)} className={`font-bold text-[18px] inline-block pb-[19px] relative before:w-[100%] before:h-[4px] before:rounded-md before:bg-blue-500 before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden ${profileActive == 'Likes' ? 'before:left-0':''} `} to={'Likes'}>Likes</Link>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Profile
