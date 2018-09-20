window.ISkeydownOK = true;
// keyCode translate as li's index
let keyCode_map = {
    192: 0,
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
    48: 10,
    81: 15,
    87: 16,
    69: 17,
    82: 18,
    84: 19,
    89: 20,
    85: 21,
    73: 22,
    79: 23,
    80: 24,
    65: 29,
    83: 30,
    68: 31,
    70: 32,
    71: 33,
    72: 34,
    74: 35,
    75: 36,
    76: 37,
    90: 42,
    88: 43,
    67: 44,
    86: 45,
    66: 46,
    78: 47,
    77: 48
};
let map_url = {
    // self increment index : url
    46: 'https://www.baidu.com/',
    33: 'https://www.google.com/',
};
// init data as LocalStorage data
if (window.localStorage.localStorageDB) {
    map_url = JSON.parse(window.localStorage.localStorageDB);
}

$("#main ol li").click(function () {
    var index = $("#main ol li").index(this);
    console.log("当前下标为：" + index);

    for (let i in map_url) {
        if (Number(i) === index) {
            // save data to localStorage before leave
            window.localStorage.localStorageDB = JSON.stringify(map_url);
            // redirect
            window.location.href = map_url[i]
        }
    }
});

// function waitForKeyDown() {
//     if (window.ISkeydownOK) {
//         // 是 true
//         return;
//     }

// }


// rec keycode
$(".REC_btn").click(function () {
    $('.keyBind_code').attr('placeholder', '等待按下一个键盘按键!')
    window.ISkeydownOK = false;

    $(document).keydown(function (event) {
        if (window.ISkeydownOK == false) {
            $('.keyBind_code').val(event.keyCode)
            window.ISkeydownOK = true;
        }
    })
});


// 完成，进行绑定! btn
$('.save_DIY_url').click(function () {
    if (($('.url_bind_ipt1').val()) && ($('.url_bind_ipt2').val())) {
        let keycode = $('.url_bind_ipt1').val();
        let index; // 映射数据对象 的自增长 index
        for (let i in keyCode_map) {
            if (Number(i) == keycode) {
                index = keyCode_map[i];
                console.log('index:::' + index)
                break;
            }
        }

        let url = $('.url_bind_ipt2').val(); // 用户输入想要绑定的url
        let temp_obj = {};
        temp_obj[index] = url;
        debugger;
        map_url = Object.assign({}, map_url, temp_obj);
        window.localStorage.localStorageDB = JSON.stringify(map_url);
    }
})



$(document).keydown(function (event) {
    if (!window.ISkeydownOK) {
        return;
    }
    let map_url_index = 0;
    // translate keyCode as li's index
    for (let i in keyCode_map) {
        if (Number(i) == event.keyCode) {
            map_url_index = keyCode_map[i];
            break;
        }
    }

    for (let i in map_url) {
        if (Number(i) === map_url_index) {
            // save data to localStorage before leave
            window.localStorage.localStorageDB = JSON.stringify(map_url);
            // redirect
            window.location.href = map_url[i]

        }
    }
});

