
        $(document).ready(function () {
            $("#boton").click(function () {
                 $(this).html(alert("El formulario fue enviado correctamente.."));
            });
        });
        $(document).ready(function () {
            $("h5").dblclick(function () {
                $(this).css({
                    "color": "red",
                });
            }); 
        });
        $(document).ready(function () {
           $(".cardhide").click(function() {
              $(".divhide").toggle();
          })
        });
