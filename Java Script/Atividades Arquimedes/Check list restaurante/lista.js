function enviar() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checked = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checked.push(checkboxes[i].name);
      }
    }
    alert("Itens marcados:\n" + checked.join("\n"));
  }
  
        
    