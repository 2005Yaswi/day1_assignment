function F6(){
    const review_name=["yash","harshi","ram","sita","krishna"];
    const describe=["Good","Bad","Awesome","Average","Quality is not good"];
    return (<div>
        <img src="./ai img.jpg" alt="Description of image" style={{ width: '100px', height: '100px' }} />
        <h1>Reviews</h1>
        <ul>
        {review_name.map((name, index) => (
          <li key={index}>
            <h2>{name}</h2>{describe[index]}
          </li>
        ))}
      </ul>
    </div>);
}
export default F6;