import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

const getUserPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json(); 
}

const getInsta = async () => {
  const key = process.env.Instagram_API_KEY;
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${key}`);

  return res.json()
  
}



export default async function ListOfPosts() {
  const [posts, users, insta] = await Promise.all([getPostsData(), getUserPosts(), getInsta()])


  return (
    <>
    <div className="flex h-screen flex-col ">
        <div className="border border-pink-600 pl-5 pt-20 text-sm">
        {posts.map((post) => {
          return <p key={post.id}>{post.title}</p>
        })}
        </div>
        
        


        <div>
          {users.map((user) => {
            return <h1 key={user.id} className="text-bold">{user.name}</h1>
          })}
        </div>
      </div>
    </>
  );
}

