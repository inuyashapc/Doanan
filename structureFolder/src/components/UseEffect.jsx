import { useEffect, useState } from "react";

const UseEffect = () => {
  //useEffect là React Hook dùng để xử lý side effects trong function component.
  //   Nói đơn giản:
  // 👉 useEffect dùng để làm những việc “xảy ra sau khi render”, ví dụ:

  //   khong co dependency
  // useEffect(() => {
  //   console.log("Render lại");
  // });

  //dependency rong
  useEffect(() => {
    console.log("Chạy 1 lần duy nhất");
  }, []);
  //chi can la set thi se render lai
  const [count0, setCount] = useState(0);
  console.log("🚀 ========= count:", count0);
  const [count1, setCount1] = useState(0);
  console.log("🚀 ========= count1:", count1);
  //count0 thay doi thi useEffect chay
  useEffect(() => {
    console.log("Count thay đổi:", count0);
  }, [count0]);
  //count1 thay doi thi useEffect chay
  useEffect(() => {
    console.log("Count1 thay đổi:", count1);
  }, [count1]);
  return (
    <div>
      <button onClick={() => setCount(count0 + 1)}>Count: {count0}</button>
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
    </div>
  );
};

export default UseEffect;
