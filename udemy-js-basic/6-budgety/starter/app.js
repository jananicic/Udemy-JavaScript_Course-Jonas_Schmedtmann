let budgetController = (function () {

    let Expenses = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, description, value) {
            let newItem, ID;

            if(data.allItems[type].length > 0)
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            else
                ID = 0;

            if(type === 'exp')
                newItem = new Expenses(ID, description, value);
            else if(type === 'inc')
                newItem = new Income(ID, description, value);

            data.allItems[type].push(newItem);
            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    };

})();

let UIControler = (function () {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        },
        addListItem: function (obj, type) {
            let html, newHtml, element;

            if (type === 'inc'){
                html = '<div class="item clearfix" id="income-0%obj.id%"> <div class="item__description">Salary</div> <div class="right clearfix"> <div class="item__value">+ 2,100.00</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else if (type === 'exp') {
                html ='<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"> <div class="item__value">- 900.00</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
        }
    }

})();

let controller = (function (budgetCtrl, UICtrl) {

    function setupEventListener() {
        let DOMstrings;
        DOMstrings = UIControler.getDOMstrings();

        document.querySelector(DOMstrings.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13)
                ctrlAddItem()
        });
    }

    function ctrlAddItem() {
        let input, item;

        input = UICtrl.getInput();
        item = budgetCtrl.addItem(input.type, input.description, input.value);
    }

    return {
        init: function() {
            console.log('aplikacija se pokrenula');
            setupEventListener();
        }
    }
})(budgetController, UIControler);

controller.init();