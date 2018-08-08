document.addEventListener('DOMContentLoaded', function () {
    var basketItem = document.querySelectorAll('.basket__item');

    Object.keys(basketItem).forEach(function (key) {
        basketItem[key].onclick = function () {
            if (document.querySelector('.basket__item_active')) {
                document.querySelector('.basket__item_active').classList.remove('basket__item_active');
            }
            basketItem[key].classList.add('basket__item_active');
        }
    });

    // open and close dish info
    var btnMoreInfo = document.querySelectorAll('.dish-add-pointer');
    var arrowBtnMoreInfo = document.querySelectorAll('.dish-add-pointer__ico');
    var container = document.querySelector('.product-descr__hold');

    Array.prototype.forEach.call(btnMoreInfo, function (el) {
        el.onclick = function () {
            Array.prototype.forEach.call(arrowBtnMoreInfo, function (ar) {
                if (ar.classList.contains('dish-add-pointer__ico_active')) {
                    ar.classList.remove('dish-add-pointer__ico_active');
                    container.classList.remove('product-descr__hold_active');
                } else {
                    ar.classList.add('dish-add-pointer__ico_active');
                    container.classList.add('product-descr__hold_active');
                }
            })
        }
    })
});

    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tab-content");
// tabcontent = document.getElementsByClassName("tab-content");
    tabcontent[0].style.display = "block";

    function tabs(evt, cityName) {

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.querySelectorAll(".tab__item");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }




