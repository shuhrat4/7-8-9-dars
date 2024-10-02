import React, { useState } from 'react';
import BoburImg from '../../assets/images/Bobur.png';
import PostItem from '../../components/PostItem';

function Tweets() {
  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      avatarIcon: 'https://picsum.photos/800/800',
      name: "Designsta",
      nick: "@inner · 25m",
      postDeck: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
      commentCount: 10,
      replyCount: 1,
      likeCount: 8,
      postImg: null
    },
    {
      id: 2,
      avatarIcon: 'https://picsum.photos/800/800',
      name: "cloutexhibition",
      nick: "@RajLahoti · 22m",
      postDeck: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: 0,
      replyCount: 5,
      likeCount: 9,
      postImg: null
    },
    {
      id: 3,
      avatarIcon: 'https://picsum.photos/800/800',
      name: "CreativePhoto",
      nick: "@cloutexhibition · 1h",
      postDeck: "A bo'pti maskamasman",
      commentCount: 10,
      replyCount: 1,
      likeCount: 8,
      postImg: BoburImg
    },
  ]);

  return (
    <div className="">
      <ul>
        {userPosts.map(item => <PostItem post={userPosts} setPosts={setUserPosts} key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}
export default Tweets;
