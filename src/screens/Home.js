import { useHistory } from "react-router";
import { logUserOut } from "../apollo";

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>로그인 하신 걸 환영 합니다!!!</h1>
      <button onClick={() => logUserOut(history)}>Log out!</button>
    </div>
  );
}
export default Home;
