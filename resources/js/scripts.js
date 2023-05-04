$('.search').on('click', function(e) {
    e.preventDefault();
    $.getJSON(
        "https://api.github.com/users/" + $('#user').val(),
        (data) => {
          $("#img").attr("src", data.avatar_url);
          $("#name").html(data.name);
          $("#registerDate").html(data.created_at);
          $("#repos").html(data.public_repos);
        }
    );

    $('.profile').addClass('card');
    $('.list-profile').removeClass('none');
});

$('.save').on('click', function(e) {
    e.preventDefault();

    var name = $('#name').text();
    var img = $('#img').attr('src');
    var registerDate = $('#registerDate').text();
    var repos = $('#repos').text();

    $.ajax({
        url: "/saveProfile",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: "POST",
        data: {
            name: name,
            img: img,
            registerDate: registerDate,
            repos: repos
        },
        cache: false,
        success: function(dataResult){
            alert('Pefil salvo com sucesso!')
        }
    });
});

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
