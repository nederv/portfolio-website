//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {

 
    
     
            

  // שלב 5
  // העלאת התרעה לאחר לחיצה על הורדה
  const toastTrigger = document.getElementById('success-download-btn')
const toastLiveExample = document.getElementById('toast-download')

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample, {
      autohide: false
    });
    toast.show();
  });
}


  // העלאת התרעה לאחר לחיצה על הורדה
  const toastTrigger2 = document.getElementById('success2-download-btn')
const toastLiveExample2 = document.getElementById('toast-download2')

if (toastTrigger2) {
  toastTrigger2.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample2, {
      autohide: false
    });
    toast.show();
  });
}
// העלאת התרעה לאחר לחיצה על הורדה
const toastTrigger3 = document.getElementById('success3-download-btn')
const toastLiveExample3 = document.getElementById('toast-download3')

if (toastTrigger3) {
  toastTrigger3.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample3, {
      autohide: false
    });
    toast.show();
  });
}

  // שלב 6
  // פונקציית חיפוש
  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchFunc);
  }

});



// שלב 6
function searchFunc() {
  // נמצא את תיבת הטקסט
  const searchWord = document.getElementById("search-box");
  // נמצא את כל הכותרות
  const titles = document.querySelectorAll(".card-wrapper h5");

  // לכל כותרת נבדוק האם היא מכילה את הערך שנמצא בתיבת הטקסט
  for (i = 0; i < titles.length; i++) {
    if (titles[i].innerHTML.includes(searchWord.value)) {
      // אם כן - נוסיף מחלקה של צבע רקע צהוב ונוריד את מחלקת ההסתרה
      titles[i].classList.add("bg-warning");
      titles[i].closest(".card-wrapper").classList.remove("d-none");
    } else {
      // אם לא - נוריד את המחלקה עם צבע הרקע ונוסיף את מחלקת ההסתרה
      // מחלקת ההסתרה תתווסף לאלמנט האב הכי קרוב לכותרת שיש לו מחלקת card-wrapper
      titles[i].classList.remove("bg-warning");
      titles[i].closest(".card-wrapper").classList.add("d-none");
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {
	const textArray = ["היי יעל!  ", "מה שלומך?  ", "הצ'אטי שלי הכין  "];
	let counter = 0;
	let elem = document.querySelector(".animated-heading");
	let currentText = "";
	let letterCount = 0;
	let letter = "";

	function type() {
		if (counter === textArray.length) {
			counter = 0;
		}
		currentText = textArray[counter];
		letter = currentText.slice(0, ++letterCount);
		elem.textContent = letter;
		if (letterCount === currentText.length) {
			counter++;
			letterCount = 0;
		}
		setTimeout(type, 200);
	}
	type();
});





// $('a[href*="#portfolio"]').on('click', function (e) {
//   e.preventDefault();

//   $('html, body').animate(
//     {
//       scrollTop: $($(this).attr('href')).offset().top,
//     },
//     500,
//     'linear'
//   );
// });




// חלון קופץ פורטופוליו

// $(document).ready(function(){
//   $(".card").click(function(){
//     var imgSrc = $(this).find("img").attr("src");
//     $("#modal-image").attr("src", imgSrc);
//     $("#myModal").modal("show");
//   });
// });

// // Get the modal
// var modal = document.getElementById('myModal');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

var toast = new bootstrap.Toast(document.getElementById('toast-download'), {
  autohide: false
});
toast.show();
// var toast = new bootstrap.Toast(document.getElementById('toast-download2'), {
//   autohide: false
// });
// toast.show();
// var toast = new bootstrap.Toast(document.getElementById('toast-download3'), {
//   autohide: false
// });
// toast.show();