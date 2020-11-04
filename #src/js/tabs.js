let $tabs = function (target) {
    let _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target);
    let _eventTabsShow;
    let _showTab = function (tabsLinkTarget) {
        let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.form-header__link--active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.form-body__pane--show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
            return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('form-header__link--active');
        }
        if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('form-body__pane--show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('form-header__link--active');
        tabsPaneTarget.classList.add('form-body__pane--show');
        document.dispatchEvent(_eventTabsShow);
    },
        _switchTabTo = function (tabsLinkIndex) {
            let tabsLinks = _elemTabs.querySelectorAll('.form-header__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[ tabsLinkIndex - 1 ]);
            }
        };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function (e) {
        let tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('form-header__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function (target) {
            _showTab(target);
        },
        switchTabTo: function (index) {
            _switchTabTo(index);
        }
    }

};

$tabs('.location-form-bottom-row__form');