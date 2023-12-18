function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});


previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

addEventListener("DOMContentLoaded", () => {

  type = findGetParameter("type");

  if (type != null) {

    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    tabcontent[parseInt(type)].style.display = "block";
    tablinks[parseInt(type)].className += " active"

  } else {

    document.getElementById("mens").style.display = "block";

    document.getElementsByClassName("tablinks")[0].className += " active";

  }


})


//Women


let preveiwContainer_women = document.querySelector('.products-preview_women');
let previewBox_women = preveiwContainer_women.querySelectorAll('.preview_women');

document.querySelectorAll('.products-container_women .product_women').forEach(product_women => {
  product_women.onclick = () => {
    preveiwContainer_women.style.display = 'flex';
    let name = product_women.getAttribute('data-name');
    previewBox_women.forEach(preview_women => {
      let target = preview_women.getAttribute('data-target');
      if (name == target) {
        preview_women.classList.add('active');
      }
    });
  };
});

previewBox_women.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer_women.style.display = 'none';
  };
});


//boys


let preveiwContainer_boys = document.querySelector('.products-preview_boys');
let previewBox_boys = preveiwContainer_boys.querySelectorAll('.preview_boys');

document.querySelectorAll('.products-container_boys .product_boys').forEach(product_boys => {
  product_boys.onclick = () => {
    preveiwContainer_boys.style.display = 'flex';
    let name = product_boys.getAttribute('data-name');
    previewBox_boys.forEach(preview_boys => {
      let target = preview_boys.getAttribute('data-target');
      if (name == target) {
        preview_boys.classList.add('active');
      }
    });
  };
});

previewBox_boys.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer_boys.style.display = 'none';
  };
});


//girls

let preveiwContainer_girls = document.querySelector('.products-preview_girls');
let previewBox_girls = preveiwContainer_girls.querySelectorAll('.preview_girls');

document.querySelectorAll('.products-container_girls .product_girls').forEach(product_girls => {
  product_girls.onclick = () => {
    preveiwContainer_girls.style.display = 'flex';
    let name = product_girls.getAttribute('data-name');
    previewBox_girls.forEach(preview_girls => {
      let target = preview_girls.getAttribute('data-target');
      if (name == target) {
        preview_girls.classList.add('active');
      }
    });
  };
});

previewBox_girls.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer_girls.style.display = 'none';
  };
});

//new arrivals

let preveiwContainer_arrivals = document.querySelector('.products-preview_arrivals');
let previewBox_arrivals = preveiwContainer_arrivals.querySelectorAll('.preview_arrivals');

document.querySelectorAll('.products-container_arrivals .product_arrivals').forEach(product_arrivals => {
  product_arrivals.onclick = () => {
    preveiwContainer_arrivals.style.display = 'flex';
    let name = product_arrivals.getAttribute('data-name');
    previewBox_arrivals.forEach(preview_arrivals => {
      let target = preview_arrivals.getAttribute('data-target');
      if (name == target) {
        preview_arrivals.classList.add('active');
      }
    });
  };
});

previewBox_arrivals.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer_arrivals.style.display = 'none';
  };
});