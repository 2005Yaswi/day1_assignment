function F4(){
    const fruits=["apple","Banana","Fig","Lichi","Pear","Plum","Blueberry"];
    return (<div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default F4;