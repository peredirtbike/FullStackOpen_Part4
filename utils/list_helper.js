const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  return blogs?.length
  ? blogs.reduce(reducer, 0)
  : 0
}

const favouriteBlog = (blogs) => {
  if(blogs){
    const likes = blogs.map(object => {
      return blogs
      ?object.likes:0;
    });

    const max = Math.max(...likes);
    return blogs?.length
      ?max 
      :0
  }else{
    return 0
  }
  
}
  
  module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
  }