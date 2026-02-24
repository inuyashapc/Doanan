import { useEffect, useState } from "react";

// functional Component
function Left(props) {
  // khai báo 1 state có tên là count
  const [count, setCount] = useState(0);
  console.log('🚀 ========= count:', count)

  // sử dụng useEffect để khiểm soát vòng đời của component
  useEffect(() => {
    return () => {
      console.log("Đc gọi khi component unmount - mounting");
    };
  }, [count]);

  return (
    <div className="row">
      <div className="col">
        <h1>Count: {count}</h1>
        <button
            onClick={()=>setCount(count + 1)}
        > Thêm 1</button>
      </div>
    </div>
  );
}

export default Left
