function toggleCheckboxes(selector) {
    let checkboxes = document.querySelectorAll(selector);
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            checkboxes.forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
}

toggleCheckboxes(".menu > li > input[type='checkbox']");
toggleCheckboxes(".menu > li > ul li > input[type='checkbox']");