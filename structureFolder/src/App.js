import CallApi from './components/CallApi.jsx';
function App() {
  return (
    // Component = một phần giao diện + logic riêng, có thể tái sử dụng
    <section className="container">
      {/* <Header /> */}
      {/* <hr></hr> */}
      {/* newData va a goi la props */}
      {/* children la noi dung ben trong the mo va the dong cua component */}
      {/* <Content newData={'1234'} a={'6789'}>{'children'}</Content>
      <Content /> */}
      {/* <Left></Left> */}
      {/* <Tutorial /> */}
      {/* <UseEffect /> */}
      <CallApi />
    </section>
  );
}


export default App;
