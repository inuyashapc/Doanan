import React from 'react';  
// class component 
class Header extends React.Component {
    constructor(props){//props là thuộc tính của đối tượng -> chứa dữ liệu ban đầu
        super(props);
        // khai báo 1 biến state -> quản lý trạng thái dữ liệu của component
        this.state = { count: 0 };
    }

    // hàm được gọi tự động khi component đc gắn vào DOM
    componentDidMount(){
        console.log("Đc gọi khi component đc gắn vào DOM");
    }
    // gọi khi cout đc thay đổi
    componentDidUpdate(){
        console.log("Được gọi khi state:count đc thay đổi giá trị");
    }

    componentWillUnmount(){

    }


    increment = () => {
        // tăng giá trị của count lên 1 đơn vị
        this.setState(prevState => ({ count: prevState.count + 1 }) );
    }

    decrement = () => {
        // giảm giá trị của count đi 1 đơn vị
        this.setState(prevState => ({ count: prevState.count - 1 }) );
    }

    render(){
        return (
            <div className="row">
               <div className="col">
                    <h1>Count: {this.state.count}</h1>
                    
                    <button onClick={this.increment}>
                        tăng thêm 1
                    </button>

                    <button onClick={this.decrement}>
                        giảm 1
                    </button>

               </div>
            </div>
        );
    }
}


export default Header;