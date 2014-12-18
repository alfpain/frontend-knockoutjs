// Define a "Person" class that tracks its own name and children, and has a method to add a new child
var Person = function(name, children) {
    this.name = name;
    this.children = ko.observableArray(children);
    this.itemToAdd = ko.observable("");

        this.addChild = function () {
        if ((this.itemToAdd() != "") && (this.children.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
            this.children.push(this.itemToAdd());
        this.itemToAdd(""); // Clear the text box

    }.bind(this);
}
 
// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
var viewModel = {
    people: [
        new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Person("Charles", ["Cayenne", "Cleopatra"])
        ],
    showRenderTimes: ko.observable(false)
};
 
ko.applyBindings(viewModel);