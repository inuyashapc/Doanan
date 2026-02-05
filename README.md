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

