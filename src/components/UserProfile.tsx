type UserProfileProps = {
    name: string,
    age: number,
}
const UserProfile = (props:UserProfileProps) => {
  return (
    <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
    </ul>
  )
}

export default UserProfile