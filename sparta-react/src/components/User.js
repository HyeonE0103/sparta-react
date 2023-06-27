//  User 컴포넌트
import Button from "./Button.js";

function User(props) {
  return (
    <div className="user-card">
      <div>{props.user.age}살 - </div>
      <div>{props.user.name}</div>
      <Button color="red" onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </Button>
    </div>
  );
}
export default User;
