import { useEffect, useState } from "react";

const Tutorial = ({ products, categories, brands }) => {
  const [productsData, setProductsData] = useState([...brands]);
  const [search, setSearch] = useState("");
  const [msgNotFound, setMsgNotFound] = useState("");
  const [productsData1, setProductsData1] = useState([]);
  const [search1, setSearch1] = useState("");
  const [msgNotFound1, setMsgNotFound1] = useState("");

  useEffect(() => {
    if (search) {
      const searchResult = [...brands].filter((b) =>
        b.name.toLowerCase().startsWith(search.toLowerCase()),
      );
      if (searchResult.length > 0) {
        setMsgNotFound("");
        setProductsData(searchResult);
      } else setMsgNotFound("Brand not found!");
    } else {
      setProductsData([...brands]);
    }
  }, [search]);

  useEffect(() => {
    if (search1) {
      const searchResult1 = [...categories].filter((c) =>
        c.name.toLowerCase().startsWith(search1.toLowerCase()),
      );
      if (searchResult1.length > 0) {
        setMsgNotFound1("");
        setProductsData1(searchResult1);
      } else setMsgNotFound1("catetgories not found!");
    } else {
      setProductsData1([...categories]);
    }
  }, [search1]);

  return (
    <div className="row">
      <div className="col">
        <h1>List of Products</h1>
        <div>
          <input
            onChange={(e) => {
              return setSearch(e.target.value);
            }}
            placeholder="Enter title to search"
          />
        </div>
        {msgNotFound ? (
          <>{msgNotFound}</>
        ) : (
          <table className="table table-bordered table-stripped">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
            {productsData?.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.price}</td>
              </tr>
            ))}
          </table>
        )}

        <h1>List of categories</h1>
        <div>
          <input
            onChange={(e) => {
              return setSearch1(e.target.value);
            }}
            placeholder="Enter title to search"
          />
        </div>
        {msgNotFound1 ? (
          <>{msgNotFound1}</>
        ) : (
          <table className="table table-bordered table-stripped">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
            {productsData1?.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.price}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
