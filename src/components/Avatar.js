import '../css/Avatar.css';

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={`https://avatars.dicebear.com/api/human/${props.name}.svg`} alt={props.name}/>
    </div>
    
  );
}

export default Avatar;

/*
data.map((item,index) => {
  return (<div key={index} className={`friendlist-item ${item.position}`}>
    <div>{item.user}</div>
    <Avatar name={item.user}/>
    <div className="displayName"> {item.displayName}</div>
  </div>)
})
*/