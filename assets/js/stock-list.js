let tabsLis = document.querySelectorAll('.tabs li'),
    boxes = document.querySelectorAll('.content .box');


tabsLis.forEach((tab) => {
    // adding click for each list (li)
    tab.addEventListener('click', function (e) {
        tabsLis.forEach((tab) => {
            // when you CLICK remove class active from all li
            tab.classList.remove("active");
        });
        // when you click add class on the li
        e.currentTarget.classList.add('active');
        boxes.forEach((box) => {
            //Removing active class for all content section on click
            box.classList.remove('active');
            //select the section that contain the class of data-stock and put class active on it
            document.querySelector('.' + e.currentTarget.dataset.whatsapp).classList.add('active');
        });
    });
});