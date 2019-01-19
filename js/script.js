var info, balance;

function account(name, lastname, age, city, telephone, id, branch, initial) {
    this.Name = name;
    this.Lastname = lastname;
    this.Age = age;
    this.City = city;
    this.Telephone = telephone;
    this.Id = id;
    this.Initial = initial;
    this.Branch = branch;
    // this.Deposity = deposity;
    // this.Withdraw = withdraw;

}
account.prototype.flora = function(deposit) {
    balance = this.Initial + deposit;
    return balance;


}

account.prototype.eddy = function(withdra) {



    if (this.Initial < withdra) {
        alert("insufficient amount")
    } else {

        balance = this.Initial - withdra;

        return balance;
    }


}

$(document).ready(function() {

    $('#inf').click(function() {
        // alert("dfhutbj")
        var name1 = $("input#name").val();

        var lastname1 = $("input#lastname").val();


        var age1 = $("input#age").val();


        var city1 = $("input#city").val();
        $(".city1").text(city1);


        var telephone1 = $("input#telephone").val();



        var id1 = $("input#id").val();


        var initial1 = parseInt($("input#initial").val());


        var branch1 = $("input#branch").val();




        info = new account(name1, lastname1, age1, city1, telephone1, branch1, id1, initial1)
        console.log(info);
        $('#prev0').hide()
        $('#prev1').show()
        $('#prev2').show()
    });

    $('#dep').click(function() {

        var deposity = parseInt($("input#comp").val());
        info.flora(deposity)


        alert("you have deposit money :" + balance)


    })

    $('#with').click(function() {

        var withdraw = parseInt($("input#chair").val());
        info.eddy(withdraw)
        alert("sufficient amount :" + balance)







    })

    $('#submit').click(function() {

        $(".name1").text(newAccount.name1);

        $(".lastname1").text(newAccount.lastname1);

        $(".age1").text(newAccount.age1);
        $(".telephone1").text(newAccount.telephone1);
        $(".id1").text(newAccount.id1);
        $(".initial1").text(newAccount.initial1);

        $(".branch1").text(newAccount.branch1);

    })


})