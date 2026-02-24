// import { useState } from "react";

// const Content = () => {
//   const [text, setText] = useState();
//   console.log('🚀 ========= text:', text)
//   const handleChangeText = (e) => {
//     console.log("🚀 ========= e:", e.target.value);
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       {/* handleChangeText('asdffdsa') thi se la cach viet truyen tham so */}
//       {/* handleChangeText thi khi do minh se co event de lay ra dung */}
//       <input type="text" onChange={handleChangeText} />
//       <p>{text}</p>
//     </div>
//   );
// };

// export default Content;

import { useEffect, useState } from "react";
import { changeTime } from "../utils/changeTime";
import { MESSAGE } from "../utils/constant";
const Content = () => {
  const [count, setCount] = useState(0);
  const currentDate = new Date();
  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <h2>{changeTime(currentDate)}</h2>
      <h2>{MESSAGE}</h2>
      <h2>{process.env.REACT_APP_PORT}</h2>
    </div>
  );
};

export default Content;
