
function erase_after_catergory1(){

    document.getElementById('select-category1').value = "";
    document.getElementById('select-category2').value = "";
    document.getElementById('select-car-name').value = "";
    document.getElementById('select-mileage').value = "";
    document.getElementById("carPrice").innerText = "원";
    document.getElementById("carVat").innerText = "원";
    document.getElementById("carDeposit").innerText = "원";
    document.getElementById("carTotal").innerText = "원";
    setSelectBoxByText('select-category2', "차 분류를 선택해주세요");
    setSelectBoxByText('select-car-name', "차명을 선택해주세요");
    setSelectBoxByText('select-mileage', "주행거리 선택해주세요");

}

function erase_after_catergory2(){

    document.getElementById('select-category2').value = "";
    document.getElementById('select-car-name').value = "";
    document.getElementById('select-mileage').value = "";
    document.getElementById("carPrice").innerText = "원";
    document.getElementById("carVat").innerText = "원";
    document.getElementById("carDeposit").innerText = "원";
    document.getElementById("carTotal").innerText = "원";
    setSelectBoxByText('select-car-name', "차명을 선택해주세요");
    setSelectBoxByText('select-mileage', "주행거리 선택해주세요");
}

function erase_after_carname(){

    document.getElementById('select-car-name').value = "";
    document.getElementById('select-mileage').value = "";
    document.getElementById("carPrice").innerText = "원";
    document.getElementById("carVat").innerText = "원";
    document.getElementById("carDeposit").innerText = "원";
    document.getElementById("carTotal").innerText = "원";
    setSelectBoxByText('select-mileage', "주행거리 선택해주세요");
}

function erase_after_milege(){

    document.getElementById('select-mileage').value = "";
    document.getElementById("carPrice").innerText = "원";
    document.getElementById("carVat").innerText = "원";
    document.getElementById("carDeposit").innerText = "원";
    document.getElementById("carTotal").innerText = "원";
}

// 간편상담 요청
function make_easy_reservation () {

    if (document.getElementById("reservation-detail-name").value == ""){
        alert('성함을 입력해주세요.')
        return
    }

    if (document.getElementById("reservation-detail-phone").value == ""){
        alert('전화번호를 입력해주세요.')
        return
    }


    var data = {
        name : $("#reservation-detail-name").val(),
        phoneNo : $("#reservation-detail-phone").val(),
        detail : $("#reservation-detail-details").val(),
        title : "간편상담신청",
        car_name : $("#reservation-detail-carname").val(),
        mileage : $("#reservation-detail-region").val(),
        option : $("#reservation-detail-resdate").val()
    };
    console.log(data)

    var checkbox = document.getElementById("agree")
    if(checkbox.checked) {
        $.ajax({
            type : 'POST',
            url : '/reservation/apply',
            dataType : 'json',
            contentType : 'application/json; charset=utf-8',
            data : JSON.stringify(data)
        }).done(function () {
            alert('예약이 완료되었습니다.');
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
    } else{
        alert("개인정보 수집 및 이용에 동의해주세요.");
    }
}
// 에약 요청
function make_reservation () {

    var tmp = document.getElementById("rent-product1")
    var tmp1= document.getElementsByName("rent-product")

    if (document.getElementById("reservation-detail-name").value == ""){
        alert('성함을 입력해주세요.')
        return
    }

    if (document.getElementById("reservation-detail-phone").value == ""){
        alert('전화번호를 입력해주세요.')
        return
    }

    var product;
    if (document.getElementById("long-rent-product1") != null) {

        if (document.getElementById("long-rent-product1").checked) {
            console.log('통 1')
            product = document.getElementById("long-rent-product1").getAttribute("value")
        } else if ((document.getElementById("long-rent-product2").checked)){
            console.log('통 2')
            product = document.getElementById("long-rent-product2").getAttribute("value")
        } else {
            console.log('통 3')
            product = document.getElementById("long-rent-product3").getAttribute("value")
        }

    } else if (document.getElementById("rent-product1") != null) {

        var month1 = document.getElementById("rent-product1")

        if (month1 && month1.checked) {
            console.log("통과 2")
            product = document.getElementById("rent-product1").getAttribute("value")
        } else {
            console.log("통과 3")
            product = document.getElementById("rent-product2").getAttribute("value")
        }

        if (product == "rentMonth") {
            product = "월렌트"
        } else if (product == "rentYear") {
            product = "12개월 렌트";
        }
    } else if (document.getElementById("rentProduct") != null){
        product = document.getElementById("rentProduct").getAttribute("value")
    } else {
        product = "";
    }

    console.log(document.getElementById("carDeposit"))
    console.log(document.getElementsByName("carDeposit"))

    var deposit;
    if (document.getElementById("carDeposit") != null) {

        deposit = $("#carDeposit").val();
        // if (document.getElementById("rent-product1") && document.getElementById("rent-product1").checked){
        //     deposit = $("#rentMonth").val();
        // } else {
        //     deposit = $("#rentYear").val();
        // }
    } else if (document.getElementById("deposit-10") != null) {
        if (document.getElementById("deposit-10").checked){
            deposit = $("#deposit-10").val();
        } else if (document.getElementById("deposit-30").checked){
            deposit = $("#deposit-30").val();
        } else {
            deposit = $("#deposit-0").val();
        }
    }



    var price;
    if (document.getElementById("carTotal") != null) {
        price = document.getElementById("carTotal").innerText;
    }



    console.log(product)

    var data = {
        name : $("#reservation-detail-name").val(),
        phoneNo : $("#reservation-detail-phone").val(),
        detail : $("#reservation-detail-details").val(),
        title : document.getElementById("rent-title").getAttribute("value"),
        product : product,
        category1 : $("#select-category1").val(),
        category2 : $("#select-category2").val(),
        car_name : $("#select-car-name").val(),
        mileage : $("#select-mileage").val(),
        deposit : deposit,
        option : $("#select-car-option").val(),
        price : price
    };
    console.log(data)



    var checkbox = document.getElementById("agree")
    if(checkbox.checked) {
        $.ajax({
            type : 'POST',
            url : '/reservation/apply',
            dataType : 'json',
            contentType : 'application/json; charset=utf-8',
            data : JSON.stringify(data)
        }).done(function () {
            alert('예약이 완료되었습니다.');
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
    } else{
        alert("개인정보 수집 및 이용에 동의해주세요.");
    }
}

//차종 구하기
function get_category1(fr, detailedSelect) {
    $.ajax({
        type: 'GET',
        url: '/rent/month/' + fr,
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success: function set_c1(result) {
            console.log(detailedSelect)
            for (i = 0; i < result.length; i++) {
                detailedSelect.options[i+1] = new Option(result[i], result[i]);
            }
        }
    }).fail(function (error) {
        alert(JSON.stringify(error));
    })
}
//차 분류 구하기
function get_category2(fr1, fr2, detailedSelect) {

    $.ajax({
        type: 'GET',
        url: '/rent/month/' + fr1 + '/' + fr2,
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success: function set_c2(result) {
            detailedSelect.length = 1;
            console.log(result)
            for (i = 0; i < result.length; i++) {
                detailedSelect.options[i+1] = new Option(result[i], result[i]);
            }
        }
    }).fail(function (error) {
        alert(JSON.stringify(error));
    })
}
// 차명 구하기
function get_car_name(fr1, fr2, fr3, detailedSelect) {
    $.ajax({
        type: 'GET',
        url: '/rent/month/' + fr1 + "/name/" + fr2 + '/' + fr3,
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        success: function set_n(result) {
            detailedSelect.options.length = 1;
            for (i = 0; i < result.length; i++) {
                detailedSelect.options[i+1] = new Option(result[i], result[i]);
            }
        }
    }).fail(function (error) {
        console.log('/rent/month/' + fr1 + '/name/' + fr2 + '/' + fr3);
        alert(JSON.stringify(error));
    })
}
//주행거리 구하기
function get_mileage(fr1, detailedSelect) {
    detailedSelect.length = 1;
    if (fr1 == "rentMonth") {
        mileage_options = [2000, 2500, 3000, 4000, "기타주행거리"];
    } else {
        mileage_options = [20000, 30000, 40000, "기타주행거리"];
    }
    for (i = 0; i < mileage_options.length; i++) {
        detailedSelect.options[i+1] = new Option(mileage_options[i], mileage_options[i]);
    }
}
// 가격 파싱해서 천단위마다 , 로 끊기
function int_to_price(price) {
    var len = price.length;
    var result = "";

    for (var i=len ; i>0 ; i-=3) {
        if (result == ""){
            result = price.slice(i-3, i)
        } else {
            result = price.slice(i-3, i) + ',' + result
        }
        // console.log(result)
    }
    result = price.slice(0, len%3) + result;
    return result;
}
// 요청한 값들에 따라 가격 구하기
function get_price(fr1, fr2, fr3, detailedSelect) {
    $.ajax({
        type: 'GET',
        url: '/rent/month/' + fr1 + '/price/' + fr2 + '/' + fr3,
        contentType: "application/json; charset=euc-kr",
        dataType: 'json',
        success: function set_p(result) {
            // console.log(result)
            var price = result[0];

            if(price == '상담') {
                var vat = price
                var deposit = result[1];
                var total = vat;

                document.getElementById("carPrice").innerText = price;
                document.getElementById("carVat").innerText = vat;
                document.getElementById("carDeposit").innerText = deposit +"원";
                document.getElementById("carTotal").innerText =  total;

            } else {
                var vat = price.replace(/,/gi, "");
                vat = parseInt(vat) * 0.1;
                var deposit = result[1];
                var total = parseInt(price.replace(/,/gi, "")) + vat;

                price = int_to_price(price.toString());
                vat = int_to_price(vat.toString());
                total = int_to_price(total.toString());

                document.getElementById("carPrice").innerText = price +"원";
                document.getElementById("carVat").innerText = vat +"원";
                document.getElementById("carDeposit").innerText = deposit +"원";
                document.getElementById("carTotal").innerText =  total +"원";
            }
        }
    }).fail(function (error) {
        alert(JSON.stringify(error));
    })
}

function setSelectBoxByText(eid, etxt) {
    var eid = document.getElementById(eid);

    for (var i = 0; i < (eid.options.length); ++i) {
        // console.log(eid.options[i].innerText, etxt)
        if (eid.options[i].innerText === etxt) {
            console.log('통과 7')
            eid.options[i].selected = true;
            break
        }
    }
}
