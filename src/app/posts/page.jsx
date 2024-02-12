async function loadPost() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

async function Posts() {
  await loadPost();
  return <div>Posts page</div>;
}

export default Posts;
