const mang = mangdaco.find((item) => {
            return item.price >= 10 && item.price <= 20
        });

//item là lấy ra từng phần tử 1 trong mảng
//mangdaco là mảng khởi tạo
//mang là mảng sau khi thỏa mãn điều kiện
useEffect
không có dependance, chạy liên tục mỗi lần render
dependance rỗng, thì nó chỉ chạy hàm trong useEffect 1 lần
có dependance thì chỉ cần mỗi dependance thay đổi thì hàm trong useEffect sẽ chạy

cau truc thu muc trong reactjs
public: là nơi chưa các hình ảnh để hiển thị lên màn hình (định dạng như png, svg...)
components: là các khối xây dựng cơ bản, độc lập và có thể tái sử dụng, dùng để phân chia
giao diện người dùng thành các phần nhỏ để dễ quản lý
styles: lưu các css để xử lý cho từng page
pages: là các trang web tuong ứng với mỗi phần của dự án
services: call api
hooks: Các hàm JavaScript cho phép bạn trích xuất và sử dụng lại logic trạng thái từ các thành phần
utils: là các lớp (class), hàm (function) hoặc mô-đun chứa đoạn mã hỗ trợ chung, dùng lại nhiều lần trong dự án phần mềm