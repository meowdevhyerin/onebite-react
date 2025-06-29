import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Even from './components/Even';
import Viewer from './components/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  // 컴포넌트의 라이프사이클
  // 1. 마운트: 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });
  // 3. 언마운트: 죽음

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  // 의존성 배열
  // dependency array
  // deps
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
