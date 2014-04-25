var shell_list = [
    { id: 1, img_path: 'uploaded/shell-x (1).jpg', name: '手机壳12345', count: 0, price: 20.00 },
    { id: 2, img_path: 'uploaded/shell-x (2).jpg', name: '手机壳', count: 10, price: 100 },
    { id: 3, img_path: 'uploaded/shell-x (3).jpg', name: '手机壳', count: 100, price: 268 },
    { id: 4, img_path: 'uploaded/shell-x (4).jpg', name: '手机壳', count: 100, price: 99 },
    { id: 5, img_path: 'uploaded/shell-x (5).jpg', name: '手机壳', count: 100, price: 78 },
    { id: 6, img_path: 'uploaded/shell-x (6).jpg', name: '手机壳', count: 9, price: 65.00 },
    { id: 7, img_path: 'uploaded/shell-x (7).jpg', name: '手机壳', count: 100, price: 76.99 },
    { id: 8, img_path: 'uploaded/shell-x (8).jpg', name: '手机壳', count: 100, price: 88 },
    { id: 9, img_path: 'uploaded/shell-x (9).jpg', name: '手机壳', count: 100, price: 47 },
    { id: 10, img_path: 'uploaded/shell-x (10).jpg', name: 'shell in sell', count: 100, price: 23 },
    { id: 11, img_path: 'uploaded/shell-x (11).jpg', name: 'shell in sell', count: 100, price: 25 },
    { id: 12, img_path: 'uploaded/shell-x (12).jpg', name: 'shell in sell', count: 100, price: 42 },
    { id: 13, img_path: 'uploaded/shell-x (13).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 14, img_path: 'uploaded/shell-x (14).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 15, img_path: 'uploaded/shell-x (15).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 16, img_path: 'uploaded/shell-x (16).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 17, img_path: 'uploaded/shell-x (17).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 18, img_path: 'uploaded/shell-x (18).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 19, img_path: 'uploaded/shell-x (19).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 20, img_path: 'uploaded/shell-x (20).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 21, img_path: 'uploaded/shell-x (21).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 22, img_path: 'uploaded/shell-x (22).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 23, img_path: 'uploaded/shell-x (23).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 24, img_path: 'uploaded/shell-x (24).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 25, img_path: 'uploaded/shell-x (25).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 26, img_path: 'uploaded/shell-x (26).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 27, img_path: 'uploaded/shell-x (27).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 28, img_path: 'uploaded/shell-x (28).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 29, img_path: 'uploaded/shell-x (29).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 30, img_path: 'uploaded/shell-x (30).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 31, img_path: 'uploaded/shell-x (31).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 32, img_path: 'uploaded/shell-x (32).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 33, img_path: 'uploaded/shell-x (33).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 34, img_path: 'uploaded/shell-x (34).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 35, img_path: 'uploaded/shell-x (35).jpg', name: 'shell in sell', count: 100, price: 45 },
    { id: 36, img_path: 'uploaded/shell-x (36).jpg', name: 'shell in sell', count: 100, price: 45 }
]

var select = [
    {
        name: '手机品牌', index: 1, data: [
        { id: 1, name: "苹果" },
        { id: 2, name: '三星' },
        { id: 3, name: '华为' },
        { id: 4, name: '诺基亚' },
        { id: 5, name: 'HTC' },
        { id: 6, name: '酷派' },
        { id: 7, name: '联想' },
        { id: 8, name: 'OPPO' },
        { id: 9, name: '中兴' },
        { id: 10, name: '索尼移动' },
        { id: 11, name: '华硕' },
        { id: 12, name: '小米' },
        { id: 13, name: 'LG' },
        { id: 14, name: '金立' },
        { id: 15, name: '黑莓' },
        { id: 16, name: '努比亚' },
        { id: 17, name: 'TCL' }]
    }, {
        name: '材质', index: 2, data: [
            { id: 1, name: '软套' },
            { id: 2, name: '硬壳' },
            { id: 3, name: '皮套/PU' },
            { id: 4, name: '金属材质' },
            { id: 5, name: '边框' },
            { id: 6, name: '皮肤贴' },
            { id: 7, name: '布袋' },
            { id: 8, name: '其他' }
        ]
    }, {
        id: 3, name: '价格', data: [
           { id: 1, name: '1-59元' },
           { id: 2, name: '60-99元' },
           { id: 3, name: '100-149元' },
           { id: 4, name: '150-199元' },
           { id: 5, name: '200-299元' },
           { id: 6, name: '300-∞元' }
        ]
    }
]



