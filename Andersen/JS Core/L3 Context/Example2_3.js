const group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(student => console.log(this.title + ': ' + student)); // Our Group: ["John", "Pete", "Alice"]
    }
};
group.showList();