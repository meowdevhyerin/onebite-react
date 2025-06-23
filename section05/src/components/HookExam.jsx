import useInput from '../hooks/useInput';

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문 / 반복문 안에서 호출할 수 없다
// => 서로 다른 hook들의 호출 순서가 꼬일 수 있기 때문에 react에서 허용하지 않음
// 3. Custom hook을 직접 만들 수 있다

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
