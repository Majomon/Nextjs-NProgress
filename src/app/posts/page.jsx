async function loadPost() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

async function Posts() {
  await loadPost();
  return <div>Posts page</div>;
}

export default Posts;
