// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 -> null, true, false, undefined 안됨
// 3. 객체는 그대로 렌더링 할 수 없다
// 4. 최상위 태그는 하나만 사용한다

import './Main.css';

const Main = () => {
  const user = {
    name: '혜린',
    isLogin: true,
  };

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
