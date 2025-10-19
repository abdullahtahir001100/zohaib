document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabPanes = document.querySelectorAll('.tab-pane');

            const switchTab = (targetId) => {
                tabPanes.forEach(pane => {
                    pane.classList.add('hidden');
                });

                tabButtons.forEach(button => {
                    button.classList.remove('active');
                });

                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.classList.remove('hidden');
                }

                const activeBtn = document.querySelector(`.tab-button[data-tab="${targetId}"]`);
                if (activeBtn) {
                    activeBtn.classList.add('active');
                }
            };

            tabButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetId = e.currentTarget.getAttribute('data-tab');
                    switchTab(targetId);
                });
            });
        });
        document.getElementById('quantity').addEventListener('change', function() {
            const quantity = this;
        if (quantity.value >= 5) {
            quantity.value = 5;
        }
    });
     document.addEventListener('DOMContentLoaded', function() {
            const wrapper = document.querySelector('.custom-select-wrapper');
            const nativeSelect = wrapper.querySelector('.hidden-native-select');
            const customButton = wrapper.querySelector('.select-selected');
            const customItems = wrapper.querySelector('.select-items');
            const arrow = wrapper.querySelector('.arrow');

            function closeAllSelect() {
                customButton.classList.remove('select-arrow-active');
                customItems.classList.remove('select-open');
            }
            Array.from(nativeSelect.options).forEach((option, index) => {
                
                if (option.disabled && option.selected) {
                    return;
                }
                
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = option.innerHTML;

              
                if (option.selected && !option.disabled) {
                    itemDiv.classList.add('same-as-selected');
                    customButton.innerHTML = option.innerHTML + '<span class="arrow"></span>';
                }

                itemDiv.addEventListener('click', function(e) {
                    
                    nativeSelect.value = option.value;

                   
                    customButton.innerHTML = this.innerHTML + '<span class="arrow"></span>';

                    const currentlySelected = customItems.querySelector('.same-as-selected');
                    if (currentlySelected) {
                        currentlySelected.classList.remove('same-as-selected');
                    }
                    this.classList.add('same-as-selected');

                   
                    closeAllSelect();
                    e.stopPropagation();
                });

                customItems.appendChild(itemDiv);
            });

          
            customButton.addEventListener('click', function(e) {
                e.stopPropagation();
                
             
                const isOpen = customItems.classList.contains('select-open');
                
              
                document.querySelectorAll('.select-open').forEach(item => item.classList.remove('select-open'));
                document.querySelectorAll('.select-arrow-active').forEach(item => item.classList.remove('select-arrow-active'));

                if (!isOpen) {
                    customItems.classList.add('select-open');
                    customButton.classList.add('select-arrow-active');
                } else {
                    closeAllSelect();
                }
            });

           
            document.addEventListener('click', function(e) {
                if (!wrapper.contains(e.target)) {
                    closeAllSelect();
                }
            });
        });