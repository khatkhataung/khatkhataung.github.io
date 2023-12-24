$(document).ready(function () {
    count();
    // add to card
    $('.addToCart').click(function () {
        let menu_id = $(this).data('id');
        let menu_name = $(this).data('name');
        let menu_price = $(this).data('price');
        // console.log(menu_id, menu_name, menu_price);
        let menuObj = {
            id: menu_id,
            name: menu_name,
            price: menu_price,
            qty: 1
        }
        let menuString = localStorage.getItem('menuItems');
        let menuArray ;
        if (menuString == null) {
             menuArray = [];
        } else {
            menuArray = JSON.parse(menuString);
        
        }
        let status = false;
        $.each(menuArray, function (i, v) {
            if (menu_id == v.id) {
                v.qty++;
                status = true;
            }
        })

        if (status == false) {
            menuArray.push(menuObj);
        }
       
        let menuData = JSON.stringify(menuArray);
        localStorage.setItem('menuItems',menuData);
            
        count();
    })
    
        // count
    function count() {
        let menuString = localStorage.getItem('menuItems');
        if (menuString) {
            let menuArray = JSON.parse(menuString);
            if (menuArray != null) {
                console.log(menuArray.length);
                
                $('#count_item').text(menuArray.length);
            }
        }
    };
   
    
})